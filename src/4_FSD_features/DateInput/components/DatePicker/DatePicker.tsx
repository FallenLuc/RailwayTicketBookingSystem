import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { PickerProps } from "headless-datetimepicker"
import { Datepicker } from "headless-datetimepicker"
import { memo, useCallback } from "react"
import styles from "./DatePicker.module.scss"
import { DatePickerHeader } from "./ui/DatePickerHeader/DatePickerHeader"
import { DatePickerItemList } from "./ui/DatePickerItemList/DatePickerItemList"

type DatePickerProps = {
	className?: string
	isOpen: boolean
	value?: Date | null
	onPick: (value: Date) => void
} & PickerProps

export const DatePicker = memo<DatePickerProps>(props => {
	const { className, value, onPick, isOpen } = props

	const onChangeHandler = useCallback(
		(value: Date | null) => {
			if (value) {
				onPick(value)
			}
		},
		[onPick]
	)

	return (
		<Datepicker
			onChange={onChangeHandler}
			value={value}
			startOfWeek={1}
		>
			<Datepicker.Picker
				defaultType="day"
				className={classNamesHelp(styles.DatePicker, undefined, [className])}
				alwaysOpen={isOpen}
			>
				{({ monthName, month, year }) => (
					<>
						<DatePickerHeader
							monthName={monthName}
							year={year}
						/>
						<DatePickerItemList month={month} />
					</>
				)}
			</Datepicker.Picker>
		</Datepicker>
	)
})
