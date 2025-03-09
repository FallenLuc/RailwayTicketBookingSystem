import type { sexType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Checkbox } from "@ui/Checkbox"
import { Input } from "@ui/Input"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { passengerDataType } from "../../types/passengerData.type"
import generalStyles from "../styles/Passenger.module.scss"
import { ChooseSex } from "../ui/ChooseSex/ChooseSex"
import styles from "./PassengerInfo.module.scss"

type PassengerInfoProps = {
	className?: string
	value: passengerDataType
	onChangeHandlerSurName: (value: string) => void
	onChangeHandlerFirstName: (value: string) => void
	onChangeHandlerLastName: (value: string) => void
	onChangeHandlerDateBirth: (value: string) => void
	onChangeHandlerSex: (value: sexType) => void
	onChangeHandlerIsLimitedMobility: (value: boolean) => void
} & testingProps

export const PassengerInfo = TypedMemo((props: PassengerInfoProps) => {
	const {
		className,
		onChangeHandlerFirstName,
		onChangeHandlerSex,
		onChangeHandlerSurName,
		onChangeHandlerDateBirth,
		onChangeHandlerIsLimitedMobility,
		value,
		onChangeHandlerLastName
	} = props

	return (
		<VStack
			gap={"L"}
			className={classNamesHelp(styles.passengerInfo, undefined, [className])}
		>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
			>
				<Input
					className={generalStyles.input}
					label={value.surname.isValid ? "Фамилия" : "Напишите верную фамилию"}
					classNamesLabel={generalStyles.label}
					value={value.surname.value}
					height={"s"}
					error={!value.surname.isValid}
					onChange={onChangeHandlerSurName}
				/>

				<Input
					className={generalStyles.input}
					label={value.firstName.isValid ? "Имя" : "Напишите верное имя"}
					height={"s"}
					classNamesLabel={generalStyles.label}
					value={value.firstName.value}
					error={!value.firstName.isValid}
					onChange={onChangeHandlerFirstName}
				/>

				<Input
					className={generalStyles.input}
					label={value.lastName.isValid ? "Отчество" : "Напишите верное отчество"}
					height={"s"}
					classNamesLabel={generalStyles.label}
					value={value.lastName.value || ""}
					error={!value.lastName.isValid}
					onChange={onChangeHandlerLastName}
				/>
			</HStack>
			<HStack
				gap={"M"}
				align={"center"}
			>
				<ChooseSex
					value={value.sex}
					onChange={onChangeHandlerSex}
				/>
				<Input
					className={generalStyles.input}
					label={value.dateBirth.isValid ? "Дата рождения" : "Неверный формат ДД.ММ.ГГГГ"}
					placeholder={"ДД.ММ.ГГГГ"}
					height={"s"}
					classNamesLabel={generalStyles.label}
					value={value.dateBirth.value}
					error={!value.dateBirth.isValid}
					onChange={onChangeHandlerDateBirth}
				/>
			</HStack>
			<HStack gap={"S"}>
				<Checkbox
					isChecked={value.isLimitedMobility}
					onChange={onChangeHandlerIsLimitedMobility}
				/>
				<Text
					text={"ограниченная подвижность"}
					fontSizeText={"s"}
					fontWeightText={"medium"}
					colorText={"main-dark"}
				/>
			</HStack>
		</VStack>
	)
})
