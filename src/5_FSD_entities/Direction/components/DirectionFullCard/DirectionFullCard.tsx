import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import type { carriageClassType, carriagePriceType } from "../../../Carriage"
import type { directionGeneralDataType } from "../../types/directionData.type"
import { CarriageInfoItem } from "../ui/CarriageInfoItem/CarriageInfoItem"
import { DirectionTimeInfo } from "../ui/DirectionTimeInfo/DirectionTimeInfo"
import { ServicesIcon } from "../ui/ServicesIcon/ServicesIcon"
import { TrainInfo } from "../ui/TrainInfo/TrainInfo"
import styles from "./DirectionFullCard.module.scss"

type DirectionFullCardProps = {
	className?: string
	data?: directionGeneralDataType
	typeButton?: "default" | "clear"
	buttonText?: string
	isTitle?: boolean
	onClick?: () => void
}
export const DirectionFullCard = TypedMemo((props: DirectionFullCardProps) => {
	const {
		className,
		data,
		onClick,
		typeButton = "default",
		buttonText = "",
		isTitle = false
	} = props

	const onClickHandler = useCallback(() => {
		onClick?.()
	}, [onClick])

	return (
		<VStack>
			{isTitle && (
				<Text
					title={"Поезд"}
					fontSizeTitle={"l"}
					colorTitle={"main-dark"}
					widthMax={true}
					className={styles.title}
				/>
			)}
			<div className={classNamesHelp(styles.DirectionFullCard, undefined, [className])}>
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
					justify={"spaceBetween"}
					gap={"L"}
				>
					<VStack gap={"L"}>
						{Object.entries(data?.departure?.price_info || {}).map(
							([key, value], index) => {
								const carriageClass = key as carriageClassType
								const carriagePrice = value as carriagePriceType
								return (
									<CarriageInfoItem
										key={index}
										data={data}
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
							theme={typeButton == "default" ? "defaultLight" : "transparentDark"}
							height={"s"}
							width={"s"}
							onClick={onClickHandler}
						>
							{buttonText || "Выбрать места"}
						</Button>
					</VStack>
				</VStack>
			</div>
		</VStack>
	)
})
