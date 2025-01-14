import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Datepicker, type ItemType } from "headless-datetimepicker"
import { whatIsDate } from "../../../../lib/helpers/whatIsDate/whatIsDate.helper"
import styles from "./DatePickerItem.module.scss"

type DatePickerItemProps = {
	className?: string
	item: ItemType
	month: number
}
export const DatePickerItem = TypedMemo((props: DatePickerItemProps) => {
	const { className, item, month } = props

	if (typeof item.value === "number") {
		return <></>
	}

	const { isLastDateCurrentMonth, isOtherMonth, isWeekend, isPast } = whatIsDate(
		item.value,
		month
	)

	return (
		<Datepicker.Item
			className={classNamesHelp(
				styles.item,
				{
					[styles.weekend]: isWeekend,
					[styles.lastDate]: isLastDateCurrentMonth,
					[styles.otherMonth]: (isPast || isOtherMonth) && !isLastDateCurrentMonth,
					[styles.today]: item.isToday,
					[styles.isSelected]: item.isSelected,
					[styles.allowed]: !isPast
				},
				[className]
			)}
			disabled={isPast}
			key={item.key}
			item={item}
			action="close"
		>
			{item.text}
		</Datepicker.Item>
	)
})
