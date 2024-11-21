import { CalendarIcon } from "@assets/index"
import { DATE_FORMAT_STRING, REVERSE_FORMAT_STRING } from "@constants/common.constant"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useClickOutside } from "@hooks/useClickOutside.hook"
import { Input } from "@ui/Input"
import dayjs from "dayjs"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { DatePicker } from "../DatePicker/DatePicker"
import styles from "./DateInput.module.scss"

type DateInputProps = {
	className?: string
	value?: Date
	onSaveToForm: (value: string) => void
	placeholder?: string
}

export const DateInput = memo<DateInputProps>(props => {
	const { className, value = null, onSaveToForm, placeholder } = props

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
			onSaveToForm(dayjs(value).format(REVERSE_FORMAT_STRING))
		},
		[onSaveToForm]
	)

	const onClickHandler = useCallback(() => {
		setIsOpenPicker(prev => !prev)
	}, [])

	const onCloseHandler = useCallback(() => {
		setIsOpenPicker(false)
	}, [])

	useClickOutside(inputDateRef, onCloseHandler)

	// To Feature сделать очистку инпута - возможно разблокировать свободный ввод

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
