import { memo, useCallback, useState, useEffect } from "react"
import styles from "./DateInput.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Input } from "@ui/Input"

type DateInputProps = {
	className?: string
	value: string
	onInput: (value: string) => void
}
export const DateInput = memo<DateInputProps>(props => {
	const { className, value, onInput } = props

	const [currentValue, setCurrentValue] = useState(value)

	useEffect(() => {
		setCurrentValue(value)
	}, [value])

	const onInputHandler = useCallback((value: string) => {
		setCurrentValue(value)
	}, [])

	const leaveFocusInputHandler = useCallback(() => {
		onInput(currentValue)
	}, [currentValue, onInput])

	return (
		<div className={classNamesHelp(styles.DateInput, {}, [className])}>
			<Input
				onBlur={leaveFocusInputHandler}
				placeholder={"DD/MM/YY"}
				onChange={onInputHandler}
				fontSize={"s"}
				fontWeight={"medium"}
				height={"m"}
				value={currentValue}
			/>
		</div>
	)
})
