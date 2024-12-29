import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Datepicker } from "headless-datetimepicker"
import styles from "./DatePickerHeader.module.scss"

type DatePickerHeaderProps = {
	className?: string
	monthName: string
	year: number
}
export const DatePickerHeader = TypedMemo((props: DatePickerHeaderProps) => {
	const { className, monthName, year } = props

	return (
		<HStack
			align={"center"}
			justify={"center"}
			className={classNamesHelp(styles.DatePickerHeader, undefined, [className])}
		>
			<Datepicker.Button
				action="prev"
				className={styles.arrowLeft}
			></Datepicker.Button>

			<Text
				text={`${monthName} ${year}`}
				colorText={"main-dark"}
				fontSizeText={"m"}
				fontWeightText={"fat"}
			/>

			<Datepicker.Button
				className={styles.arrowRight}
				action="next"
			></Datepicker.Button>
		</HStack>
	)
})
