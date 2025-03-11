import { CheckIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { Checkbox as CheckboxComponent } from "@headlessui/react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"
import styles from "./Checkbox.module.scss"

type CheckboxProps = {
	className?: string
	isChecked?: boolean
	onChange?: (checked: boolean) => void
} & testingProps

export const Checkbox = TypedMemo((props: CheckboxProps) => {
	const { className, isChecked, onChange } = props

	const onCheckHandler = useCallback(() => {
		onChange?.(!isChecked)
	}, [isChecked, onChange])

	return (
		<CheckboxComponent
			checked={isChecked ?? false}
			onChange={onCheckHandler}
			className={classNamesHelp(styles.Checkbox, { [styles.activeCheckbox]: isChecked }, [
				className
			])}
		>
			{isChecked && <CheckIcon className={styles.icon} />}
		</CheckboxComponent>
	)
})
