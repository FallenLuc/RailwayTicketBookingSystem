import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { ChangeEvent, InputHTMLAttributes } from "react"
import { useCallback, useEffect, useMemo, useRef } from "react"
import { VStack } from "../../../Stack"
import styles from "./Input.module.scss"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { fontSizeType, fontWeightType, appColorType } from "@customTypes/style.types"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { colorMapper } from "@helpers/colorMapper/colorMapper.helper"

type heightType = "s" | "m"

type InputCustomProps<T extends number | string> = {
	className?: string
	error?: boolean
	value: T
	height: heightType
	onChange: (value: T) => void
	autoFocus?: boolean
	fontSize?: fontSizeType
	fontWeight?: fontWeightType
	label?: string
	classNamesLabel?: string
	fontSizeLabel?: fontSizeType
	fontWeightLabel?: fontWeightType
	colorLabel?: appColorType
	readOnly?: boolean
	type?: string
	"data-testid"?: string
}

type InputProps<T extends number | string> = InputCustomProps<T> &
	Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputCustomProps<T>>

const heightMapper: Record<heightType, string> = {
	s: styles.heightS,
	m: styles.heightM
}

export const Input = TypedMemo(<T extends string | number>(props: InputProps<T>) => {
	const {
		className,
		value,
		onChange,
		autoFocus = false,
		label = "",
		classNamesLabel,
		fontSize = "m",
		fontWeight = "medium",
		fontSizeLabel = "m",
		fontWeightLabel = "medium",
		colorLabel = "main-dark",
		type = "text",
		height = "m",
		"data-testid": dataTestId = "input-ui",
		readOnly = false,
		...otherProps
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (autoFocus) {
			inputRef.current?.focus()
		}
	}, [autoFocus])

	const onChangeHandler = useCallback(
		(event: ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target

			onChange?.(value as T)
		},
		[onChange]
	)

	const mods = useMemo<Mods>(() => {
		return {}
	}, [])

	const inputElement = () => (
		<input
			data-testid={`${dataTestId}.InputElement`}
			ref={inputRef}
			type={type}
			readOnly={readOnly}
			className={classNamesHelp(styles.Input, mods, [
				className,
				heightMapper[height],
				fontSizeMapper(fontSize),
				fontWeightMapper(fontWeight)
			])}
			value={value}
			onChange={onChangeHandler}
			{...otherProps}
		/>
	)

	if (label) {
		return (
			<label
				className={classNamesHelp("", mods, [
					classNamesLabel,
					fontSizeMapper(fontSizeLabel),
					fontWeightMapper(fontWeightLabel),
					colorMapper(colorLabel)
				])}
				data-testid={`${dataTestId}.LabelElement`}
			>
				<VStack gap={"gapXS"}>
					{label}
					{inputElement()}
				</VStack>
			</label>
		)
	}

	return inputElement()
})
