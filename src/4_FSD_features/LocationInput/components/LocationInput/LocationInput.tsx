import styles from "./LocationInput.module.scss"
import { memo, useCallback, useState } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Input } from "@ui/Input"
import { LocationIcon } from "@assets/index"
import { useDebounce } from "@hooks/useDebounce.hook"

type LocationInputProps = {
	className?: string
	value?: string
	onInput: (value: string) => void
	placeholder?: string
}
export const LocationInput = memo<LocationInputProps>(props => {
	const { className, value = "", onInput, placeholder } = props

	const [currentValue, setCurrentValue] = useState(value)

	const onInputHandler = useCallback((value: string) => onInput(value), [onInput])

	const onDebounceInput = useDebounce(onInputHandler, 400)

	const onChangeHandler = useCallback(
		(value: string) => {
			setCurrentValue(value)
			onDebounceInput(value)
		},
		[onDebounceInput]
	)

	return (
		<div className={classNamesHelp(styles.LocationInput, {}, [className])}>
			<Input
				placeholder={placeholder}
				onChange={onChangeHandler}
				fontSize={"s"}
				fontWeight={"medium"}
				height={"m"}
				value={currentValue}
				Icon={LocationIcon}
			/>
		</div>
	)
})
