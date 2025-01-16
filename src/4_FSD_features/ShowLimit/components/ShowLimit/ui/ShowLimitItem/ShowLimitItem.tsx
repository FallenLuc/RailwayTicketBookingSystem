import type { showLimit } from "@customTypes/common.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"
import styles from "./ShowLimitItem.module.scss"

type ShowLimitItemProps = {
	className?: string
	item: showLimit
	isActive: boolean
	onChange?: (value: showLimit) => void
}
export const ShowLimitItem = TypedMemo((props: ShowLimitItemProps) => {
	const { className, onChange, item, isActive } = props

	const onClickHandler = useCallback(() => onChange?.(item), [item, onChange])

	return (
		<li
			key={item}
			className={classNamesHelp(styles.item, { [styles.active]: isActive }, [className])}
			onClick={onClickHandler}
		>
			{item}
		</li>
	)
})
