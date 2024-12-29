import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Datepicker } from "headless-datetimepicker"
import { DatePickerItem } from "../DatePickerItem/DatePickerItem"
import styles from "./DatePickerItemList.module.scss"

type DatePickerItemListProps = {
	className?: string
	month: number
}
export const DatePickerItemList = TypedMemo((props: DatePickerItemListProps) => {
	const { className, month } = props

	return (
		<Datepicker.Items className={classNamesHelp(styles.listItems, undefined, [className])}>
			{({ items }) =>
				items.map(item => {
					if (!item.isHeader) {
						return (
							<DatePickerItem
								key={item.key}
								item={item}
								month={month}
							/>
						)
					}
				})
			}
		</Datepicker.Items>
	)
})
