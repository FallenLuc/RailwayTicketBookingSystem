import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import styles from "./Tabs.module.scss"
import { TypedMemo } from "@sharedProviders/TypedMemo"

export type TabsItemType<T extends string> = {
	value: T
	content: string
}

type TabsProps<T extends string> = {
	className?: string
	tabs: TabsItemType<T>[]
	value?: T
	onTabClick?: (value: TabsItemType<T>) => void
}

export const Tabs = TypedMemo(<T extends string>(props: TabsProps<T>) => {
	const { className, tabs, onTabClick, value } = props

	const onTabClickHandler = (tab: TabsItemType<T>) => () => {
		if (tab.value !== value) {
			onTabClick?.(tab)
		}
	}

	return (
		<div className={classNamesHelp(styles.Tabs, {}, [className])}>
			{tabs.map(tab => (
				<button
					className={classNamesHelp(
						styles.btn,
						{
							[styles.active]: tab.value === value
						},
						[]
					)}
					key={tab.value}
					onClick={onTabClickHandler(tab)}
					value={tab.value}
				>
					{tab.content}
				</button>
			))}
		</div>
	)
})
