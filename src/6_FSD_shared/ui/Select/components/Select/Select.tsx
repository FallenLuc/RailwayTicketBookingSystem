import { Field, Label, Select as HSelect } from "@headlessui/react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { ChangeEvent, PropsWithChildren } from "react"
import { useCallback, useState } from "react"
import { HStack } from "../../../Stack"
import { OptionsList } from "../OptionsList/OptionsList"
import styles from "./Select.module.scss"

type selectThemes = "clear" | "border"

export type OptionType<T extends string> = {
	value: T
	content: string
}

export type SelectProps<T extends string> = {
	className?: string
	classNameLabel?: string
	options: OptionType<T>[]
	label?: string
	theme?: selectThemes
	value?: T
	onChange?: (value: T) => void
}

export const Select = TypedMemo(<T extends string>(props: SelectProps<T>) => {
	const { className, classNameLabel, options, value, label, onChange, theme = "clear" } = props

	const [optionValue, setOptionValue] = useState(value || options[0].value)

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLSelectElement>) => {
			const { value } = event.target

			setOptionValue(value as T)

			onChange?.(value as T)
		},
		[onChange]
	)

	const hSelectComponent = (
		<div className={classNamesHelp(styles.wrapper, undefined, [className, styles[theme]])}>
			<HSelect
				className={classNamesHelp(styles.Select, undefined)}
				onChange={onChangeHandler}
				value={optionValue}
			>
				<OptionsList options={options} />
			</HSelect>
		</div>
	)

	const Container = (props: PropsWithChildren) => (
		<HStack
			gap={"XS"}
			align={"center"}
			widthMax={false}
			className={styles.wrapper}
		>
			{props.children}
		</HStack>
	)

	if (label) {
		return (
			<Field as={Container}>
				<Label className={classNamesHelp(styles.label, undefined, [classNameLabel])}>
					{label}
				</Label>
				{hSelectComponent}
			</Field>
		)
	}

	return hSelectComponent
})
