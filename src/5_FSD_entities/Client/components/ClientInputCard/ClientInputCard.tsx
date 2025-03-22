import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { useCallback } from "react"
import type { clientDataType } from "../../types/clientData.type"
import { PayMethodInputCard } from "../PayMethodInputCard/PayMethodInputCard"
import { PersonalDataInputCard } from "../PersonalDataInputCard/PersonalDataInputCard"
import style from "./ClientInputCard.module.scss"

type ClientInputCardProps = {
	className?: string
	value: clientDataType
	onChange?: <T extends keyof clientDataType>(typeChange: T, value: clientDataType[T]) => void
} & testingProps

export const ClientInputCard = TypedMemo((props: ClientInputCardProps) => {
	const { className, value, onChange } = props

	const onChangeSurNameHandler = useCallback(
		(value: string) => onChange?.("surName", { isValid: true, value }),
		[onChange]
	)
	const onChangeFirstNameHandler = useCallback(
		(value: string) => onChange?.("firstName", { isValid: true, value }),
		[onChange]
	)
	const onChangeLastNameHandler = useCallback(
		(value: string) => onChange?.("lastName", { isValid: true, value }),
		[onChange]
	)
	const onChangePhoneHandler = useCallback(
		(value: string) => onChange?.("phoneNumber", { isValid: true, value }),
		[onChange]
	)
	const onChangeEmailHandler = useCallback(
		(value: string) => onChange?.("email", { isValid: true, value }),
		[onChange]
	)

	const onSetOnlinePayMethodHandler = useCallback(
		() => onChange?.("payMethod", "online"),
		[onChange]
	)

	const onSetOfflinePayMethodHandler = useCallback(
		() => onChange?.("payMethod", "offline"),
		[onChange]
	)

	return (
		<VStack className={classNamesHelp(style.ClientInputCard, undefined, [className])}>
			<PersonalDataInputCard
				value={value}
				onChangeSurNameHandler={onChangeSurNameHandler}
				onChangeFirstNameHandler={onChangeFirstNameHandler}
				onChangeLastNameHandler={onChangeLastNameHandler}
				onChangePhoneHandler={onChangePhoneHandler}
				onChangeEmailHandler={onChangeEmailHandler}
			/>
			<PayMethodInputCard
				value={value?.payMethod}
				onSetOnlinePayMethod={onSetOnlinePayMethodHandler}
				onSetOfflinePayMethod={onSetOfflinePayMethodHandler}
			/>
		</VStack>
	)
})
