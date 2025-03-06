import { ArrowClearToIcon, ArrowToIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import type { directionDataType } from "@entities/Direction/types/directionData.type"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { convertSecondsToTime } from "@helpers/convertSecondsToTime/convertSecondsToTime.helper"
import { convertUnixToDate } from "@helpers/convertUnixToDate/convertUnixToDate.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Dropdown } from "../../ui/Dropdown/Dropdown"
import styles from "./DirectionInfo.module.scss"

type DirectionInfoProps = {
	className?: string
	directionInfo?: directionDataType
} & testingProps

export const DirectionInfo = TypedMemo((props: DirectionInfoProps) => {
	const { className, directionInfo } = props

	return (
		<Dropdown
			className={classNamesHelp("", undefined, [className])}
			title={"Туда"}
			Icon={ArrowToIcon}
			additionalTitle={convertUnixToDate(directionInfo?.from.datetime || 0)}
		>
			<VStack gap={"XL"}>
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<Text
						text={"№ Поезда"}
						colorText={"light-gray"}
						fontSizeText={"s"}
						fontWeightText={"medium"}
					/>
					<Text
						text={directionInfo?.train.name}
						colorText={"main-light"}
						fontWeightText={"ultra-fat"}
						fontSizeText={"m"}
					/>
				</HStack>
				<HStack
					align={"flexStart"}
					justify={"spaceBetween"}
				>
					<VStack
						widthMax={false}
						gap={"M"}
						align={"flexStart"}
					>
						<Text
							TitleType={"h3"}
							align={"left"}
							title={convertSecondsToTime(directionInfo?.from.datetime || 0, true)}
							text={convertUnixToDate(directionInfo?.from.datetime || 0)}
							fontSizeTitle={"m"}
							fontWeightTitle={"ultra-fat"}
							colorTitle={"main-light"}
							fontSizeText={"s"}
							colorText={"main-gray"}
							fontWeightText={"think"}
						/>
						<Text
							TitleType={"h4"}
							title={directionInfo?.from.city.name || ""}
							textTransform={"capitalize"}
							fontSizeTitle={"xs"}
							colorTitle={"main-light"}
							fontWeightTitle={"medium"}
							text={`${directionInfo?.from.railway_station_name} вокзал`}
							fontSizeText={"xs"}
							colorText={"main-gray"}
							align={"left"}
							fontWeightText={"think"}
						/>
					</VStack>
					<VStack
						align={"center"}
						gap={"XXS"}
						widthMax={false}
					>
						<Text
							text={convertSecondsToTime(directionInfo?.duration || 0)}
							fontSizeText={"s"}
							colorText={"main-light"}
							fontWeightText={"medium"}
						/>
						<ArrowClearToIcon className={styles.icon} />
					</VStack>
					<VStack
						align={"flexEnd"}
						gap={"M"}
						widthMax={false}
					>
						<Text
							TitleType={"h3"}
							title={convertSecondsToTime(directionInfo?.to.datetime || 0, true)}
							text={convertUnixToDate(directionInfo?.to.datetime || 0)}
							fontSizeTitle={"m"}
							fontWeightTitle={"ultra-fat"}
							colorTitle={"main-light"}
							align={"right"}
							fontSizeText={"s"}
							colorText={"main-gray"}
							fontWeightText={"think"}
						/>
						<Text
							TitleType={"h4"}
							title={directionInfo?.to.city.name || ""}
							textTransform={"capitalize"}
							fontSizeTitle={"xs"}
							colorTitle={"main-light"}
							fontWeightTitle={"medium"}
							text={`${directionInfo?.to.railway_station_name} вокзал`}
							fontSizeText={"xs"}
							colorText={"main-gray"}
							align={"right"}
							fontWeightText={"think"}
						/>
					</VStack>
				</HStack>
			</VStack>
		</Dropdown>
	)
})
