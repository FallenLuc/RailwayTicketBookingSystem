import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button } from "@ui/Button"
import { Input } from "@ui/Input"
import { HStack } from "@ui/Stack"
import type { FormEvent } from "react"
import { memo, useCallback, useState } from "react"
import { validationEmail } from "../../lib/helpers/validationEmail.helper"
import styles from "./SubscriptionForm.module.scss"

type SubscriptionFormProps = {
	className?: string
	onSend: (email: string) => void
}

const preventEvent = (event: FormEvent<HTMLDivElement>) => event.preventDefault()

export const SubscriptionForm = memo<SubscriptionFormProps>(props => {
	const { className, onSend } = props

	const [value, setValue] = useState("")
	const [validateError, setValidateError] = useState(false)

	const onChangeValue = useCallback((value: string) => {
		setValue(value)
		setValidateError(false)
	}, [])

	const onSendHandler = useCallback(() => {
		if (!validationEmail(value)) {
			setValidateError(true)
		}

		if (validationEmail(value)) {
			setValue("")
			onSend(value)
		}
	}, [onSend, value])

	return (
		<HStack
			className={classNamesHelp("", {}, [className])}
			gap={"L"}
			TagType={"form"}
			align={"flexEnd"}
			onSubmit={preventEvent}
		>
			<Input
				label={validateError ? "Введите корректный email" : "Будьте в курсе событий"}
				colorLabel={"main-gray"}
				height={"m"}
				placeholder={"e-mail"}
				className={styles.input}
				error={validateError}
				value={value}
				onChange={onChangeValue}
				type={"email"}
			/>
			<Button
				type={"submit"}
				theme={"transparentLight"}
				width={"s"}
				height={"m"}
				onClick={onSendHandler}
				textUppercase={true}
				fontWeight={"medium"}
			>
				Отправить
			</Button>
		</HStack>
	)
})
