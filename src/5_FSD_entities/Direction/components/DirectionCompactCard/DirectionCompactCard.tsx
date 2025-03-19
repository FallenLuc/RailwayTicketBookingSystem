import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { directionGeneralDataType } from "../../types/directionData.type"
import { FromSum } from "../ui/FromSum/FromSum"
import { ServicesIcon } from "../ui/ServicesIcon/ServicesIcon"
import styles from "./DirectionCompactCard.module.scss"

type DirectionCompactCardProps = {
	className?: string
	data?: directionGeneralDataType
}
export const DirectionCompactCard = TypedMemo((props: DirectionCompactCardProps) => {
	const { className, data } = props

	return (
		<VStack
			className={classNamesHelp(styles.DirectionCompactCard, undefined, [className])}
			widthMax={false}
			justify={"spaceBetween"}
		>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
			>
				<Text
					TitleType={"h5"}
					title={data?.departure?.from?.city?.name}
					fontSizeTitle={"s"}
					colorTitle={"main-dark"}
					fontWeightTitle={"medium"}
					textTransform={"capitalize"}
					text={`${data?.departure?.from?.railway_station_name} вокзал`}
					fontSizeText={"xs"}
					colorText={"main-gray"}
					fontWeightText={"think"}
					classNamesText={styles.subTitle}
				/>
				<Text
					TitleType={"h5"}
					className={styles.rightTextWrapper}
					title={data?.departure?.to?.city?.name}
					align={"right"}
					fontSizeTitle={"s"}
					colorTitle={"main-dark"}
					fontWeightTitle={"medium"}
					textTransform={"capitalize"}
					text={`${data?.departure?.to?.railway_station_name} вокзал`}
					fontSizeText={"xs"}
					colorText={"main-gray"}
					fontWeightText={"think"}
					classNamesText={styles.subTitle}
				/>
			</HStack>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
			>
				<ServicesIcon
					justify={"flexStart"}
					isConditioner={data?.departure.have_air_conditioning}
					isExpress={data?.departure.is_express}
					isWifi={data?.departure?.have_wifi}
				/>
				<FromSum
					sum={data?.min_price || 0}
					color={"accent-orange"}
				/>
			</HStack>
		</VStack>
	)
})
