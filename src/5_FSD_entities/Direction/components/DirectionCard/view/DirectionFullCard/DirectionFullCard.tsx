import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import type { ReactNode } from "react"
import { useCallback, useState } from "react"
import type { carriageClassType, carriagePriceType } from "../../../../../Carriage"
import type { directionGeneralDataType } from "../../../../types/directionData.type"
import { ServicesIcon } from "../../ui/ServicesIcon/ServicesIcon"
import styles from "./DirectionFullCard.module.scss"
import { CarriageInfoItem } from "./ui/CarriageInfoItem/CarriageInfoItem"
import { DirectionTimeInfo } from "./ui/DirectionTimeInfo/DirectionTimeInfo"
import { TrainInfo } from "./ui/TrainInfo/TrainInfo"

type DirectionFullCardProps = {
	className?: string
	data?: directionGeneralDataType
	detailedPrice?: ReactNode
	onClick?: () => void
}
export const DirectionFullCard = TypedMemo((props: DirectionFullCardProps) => {
	const { className, data, detailedPrice, onClick } = props

	const [isOpenDetailedPrice, setIsOpenDetailedPrice] = useState<boolean>(false)

	const onDetailedPriceShowHandler = useCallback(() => {
		setIsOpenDetailedPrice(prev => !prev)
	}, [])

	const onClickHandler = useCallback(() => {
		onClick?.()
	}, [onClick])

	return (
		<HStack
			className={classNamesHelp(
				styles.DirectionFullCard,
				{
					[styles.sHeight]:
						Boolean(!data?.arrival) &&
						Object.entries(data?.departure?.price_info || {}).length <= 2,
					[styles.mHeight]:
						Boolean(data?.arrival) ||
						Object.entries(data?.departure?.price_info || {}).length > 2
				},
				[className]
			)}
			gap={"L"}
			justify={"spaceBetween"}
		>
			<TrainInfo data={data} />
			<VStack
				className={styles.directionsInfo}
				gap={"XL"}
			>
				<DirectionTimeInfo
					data={data?.departure}
					direction={"toTrip"}
				/>
				{data?.arrival ?
					<DirectionTimeInfo
						data={data?.arrival}
						direction={"fromTrip"}
					/>
				:	null}
			</VStack>
			<VStack
				className={styles.priceInfo}
				align={"flexEnd"}
				gap={"L"}
				justify={"spaceBetween"}
			>
				<VStack gap={"L"}>
					{Object.entries(data?.departure?.price_info || {}).map(
						([key, value], index) => {
							const carriageClass = key as carriageClassType
							const carriagePrice = value as carriagePriceType
							return (
								<CarriageInfoItem
									key={index}
									detailedPrice={detailedPrice}
									data={data}
									onDetailedPriceShow={onDetailedPriceShowHandler}
									isOpenDetailedPrice={isOpenDetailedPrice}
									carriageClass={carriageClass}
									carriagePrice={carriagePrice}
								/>
							)
						}
					)}
				</VStack>

				<VStack
					gap={"S"}
					align={"flexEnd"}
				>
					<ServicesIcon
						isConditioner={data?.departure?.have_air_conditioning}
						isWifi={data?.departure?.have_wifi}
						isExpress={data?.departure?.is_express}
					/>
					<Button
						theme={"defaultLight"}
						height={"s"}
						width={"s"}
						onClick={onClickHandler}
					>
						Выбрать места
					</Button>
				</VStack>
			</VStack>
		</HStack>
	)
})
