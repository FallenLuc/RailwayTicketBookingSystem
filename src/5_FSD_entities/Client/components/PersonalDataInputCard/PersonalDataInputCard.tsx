import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Input } from "@ui/Input"
import { HStack, VStack } from "@ui/Stack"
import type { clientDataType } from "../../types/clientData.type"
import { Title } from "../ui/Title/Title"
import styles from "./PersonalDataInputCard.module.scss"

type PersonalDataInputCardProps = {
	className?: string
	value: clientDataType
	onChangeSurNameHandler?: (value: string) => void
	onChangeFirstNameHandler?: (value: string) => void
	onChangeLastNameHandler?: (value: string) => void
	onChangePhoneHandler?: (value: string) => void
	onChangeEmailHandler?: (value: string) => void
} & testingProps

export const PersonalDataInputCard = TypedMemo((props: PersonalDataInputCardProps) => {
	const {
		className,
		onChangeFirstNameHandler,
		onChangePhoneHandler,
		onChangeSurNameHandler,
		onChangeLastNameHandler,
		onChangeEmailHandler,
		value
	} = props

	return (
		<VStack className={classNamesHelp(undefined, undefined, [className])}>
			<Title title={"Персональные данные"} />
			<VStack
				gap={"L"}
				className={styles.PersonalDataInputCard}
				align={"flexStart"}
			>
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<Input
						value={value?.surName.value}
						error={!value?.surName.isValid}
						label={value?.surName?.isValid ? "Фамилия" : "Напишите Фамилию корректно"}
						onChange={onChangeSurNameHandler}
						height={"s"}
						className={styles.input}
					/>
					<Input
						value={value?.firstName.value}
						error={!value?.firstName.isValid}
						label={value?.firstName?.isValid ? "Имя" : "Напишите Имя корректно"}
						onChange={onChangeFirstNameHandler}
						height={"s"}
						className={styles.input}
					/>
					<Input
						value={value?.lastName.value}
						error={!value?.lastName.isValid}
						label={"Отчетство"}
						onChange={onChangeLastNameHandler}
						height={"s"}
						className={styles.input}
					/>
				</HStack>
				<Input
					value={value?.phoneNumber.value}
					error={!value?.phoneNumber.isValid}
					label={
						value?.phoneNumber?.isValid ? "Контактный телефон" : "Формат +70000000000"
					}
					onChange={onChangePhoneHandler}
					height={"s"}
					className={styles.inputLarge}
				/>
				<Input
					value={value?.email.value}
					error={!value?.email.isValid}
					label={value?.email?.isValid ? "E-mail" : "Формат email@domain.com"}
					onChange={onChangeEmailHandler}
					height={"s"}
					className={styles.inputLarge}
				/>
			</VStack>
		</VStack>
	)
})
