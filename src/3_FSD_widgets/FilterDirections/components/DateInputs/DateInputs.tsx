import { DateInput } from "@features/DateInput"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useMemo } from "react"
import styles from "./DateInputs.module.scss"

type DateInputsProps = {
	className?: string
	fromTripDate?: string
	toTripDate?: string
	onSaveToTripDate: (value: string) => void
	onSaveFromTripDate: (value: string) => void
}
export const DateInputs = TypedMemo((props: DateInputsProps) => {
	const { className, onSaveFromTripDate, onSaveToTripDate, toTripDate, fromTripDate } = props

	const toTripDateLocal = useMemo(
		() => (toTripDate ? new Date(toTripDate) : undefined),
		[toTripDate]
	)

	const fromTripDateLocal = useMemo(
		() => (fromTripDate ? new Date(fromTripDate) : undefined),
		[fromTripDate]
	)

	return (
		<VStack
			gap={"M"}
			className={classNamesHelp(styles.DateInputs, {}, [className])}
		>
			<VStack gap="XS">
				<Text
					TitleType={"h4"}
					title={"Дата поездки"}
					fontSizeTitle={"m"}
					fontWeightTitle={"medium"}
					colorTitle={"main-light"}
				/>
				<DateInput
					size={"think"}
					onSaveToForm={onSaveToTripDate}
					value={toTripDateLocal}
				/>
			</VStack>
			<VStack gap={"XS"}>
				<Text
					TitleType={"h4"}
					title={"Дата возвращения"}
					fontSizeTitle={"m"}
					fontWeightTitle={"medium"}
					colorTitle={"main-light"}
				/>
				<DateInput
					size={"think"}
					onSaveToForm={onSaveFromTripDate}
					value={fromTripDateLocal}
				/>
			</VStack>
		</VStack>
	)
})
