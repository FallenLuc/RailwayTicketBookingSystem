import { memo, useCallback, useState, useRef, useEffect } from "react"
import styles from "./DateInput.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Input } from "@ui/Input"
import { DatePicker } from "../DatePicker/DatePicker"
import dayjs from "dayjs"
import { DATE_FORMAT_STRING, REVERSE_FORMAT_STRING } from "@constants/common.constant"
import { CalendarIcon } from "@assets/index"
import { useClickOutside } from "@hooks/useClickOutside.hook"

type DateInputProps = {
	className?: string
	value?: Date
	onInput: (value: string) => void
	placeholder?: string
}

export const DateInput = memo<DateInputProps>(props => {
	const { className, value = null, onInput, placeholder } = props

	const inputDateRef = useRef<HTMLDivElement>(null)

	const [currentValue, setCurrentValue] = useState(
		value ? dayjs(value).format(DATE_FORMAT_STRING) : ""
	)
	const [isOpenPicker, setIsOpenPicker] = useState(false)

	const [pickValue, setPickValue] = useState(value)

	useEffect(() => {
		setPickValue(value)
	}, [value])

	const onPickValueHandler = useCallback(
		(value: Date) => {
			setCurrentValue(dayjs(value).format(DATE_FORMAT_STRING))
			onInput(dayjs(value).format(REVERSE_FORMAT_STRING))
		},
		[onInput]
	)

	const onClickHandler = useCallback(() => {
		setIsOpenPicker(prev => !prev)
	}, [])

	const onCloseHandler = useCallback(() => {
		setIsOpenPicker(false)
	}, [])

	useClickOutside(inputDateRef, onCloseHandler)

	// Todo сделать очистку инпута

	return (
		<div
			className={classNamesHelp(styles.DateInput, {}, [className])}
			ref={inputDateRef}
		>
			<Input
				disabled={true}
				placeholder={placeholder}
				fontSize={"s"}
				fontWeight={"medium"}
				height={"m"}
				value={currentValue}
				Icon={CalendarIcon}
				onClick={onClickHandler}
			/>
			<DatePicker
				className={styles.picker}
				onPick={onPickValueHandler}
				isOpen={isOpenPicker}
				value={pickValue}
			/>
		</div>
	)
})
