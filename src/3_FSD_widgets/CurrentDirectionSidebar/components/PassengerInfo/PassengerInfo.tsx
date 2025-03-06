import { PassengerIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Dropdown } from "../../ui/Dropdown/Dropdown"
import styles from "./PassengerInfo.module.scss"

type PassengerInfoProps = {
	className?: string
	countPassenger: number
	sum: number
} & testingProps

export const PassengerInfo = TypedMemo((props: PassengerInfoProps) => {
	const { className, countPassenger, sum } = props

	return (
		<Dropdown
			className={classNamesHelp("", undefined, [className])}
			title={"Пассажиры"}
			Icon={PassengerIcon}
		>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
			>
				<Text
					text={`Пассажиров: ${countPassenger}`}
					fontSizeText={"s"}
					colorText={"light-gray"}
					widthMax={false}
					fontWeightText={"medium"}
				/>
				<HStack
					widthMax={false}
					align={"center"}
					gap={"XXS"}
				>
					<Text
						text={sum.toString()}
						fontSizeText={"m"}
						fontWeightText={"ultra-fat"}
						colorText={"main-light"}
					/>
					<span className={styles.currency}>{"₽"}</span>
				</HStack>
			</HStack>
		</Dropdown>
	)
})
