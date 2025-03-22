import type { payMethodType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import { type clientDataType, ClientInputCard } from "@entities/Client"
import type { fieldPassengerDataWithValidationType } from "@entities/Passenger"
import { useClientDataActions, useGetClientDataInfoSelector } from "@features/FillingFormClientData"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"

type ClientDataInputProps = {
	className?: string
} & testingProps

export const ClientDataInput = TypedMemo((props: ClientDataInputProps) => {
	const { className } = props

	const { setClientData } = useClientDataActions()
	const value = useGetClientDataInfoSelector()

	const onChangeClientData = useCallback(
		<T extends keyof clientDataType>(typeChange: T, value: clientDataType[T]) => {
			switch (typeChange) {
				case "firstName":
					setClientData({ firstName: value as fieldPassengerDataWithValidationType })
					break
				case "surName":
					setClientData({ surName: value as fieldPassengerDataWithValidationType })
					break
				case "lastName":
					setClientData({ lastName: value as fieldPassengerDataWithValidationType })
					break
				case "email":
					setClientData({ email: value as fieldPassengerDataWithValidationType })
					break
				case "payMethod":
					setClientData({ payMethod: value as payMethodType })
					break
				case "phoneNumber":
					setClientData({ phoneNumber: value as fieldPassengerDataWithValidationType })
					break
			}
		},
		[setClientData]
	)

	return (
		<ClientInputCard
			className={className}
			value={value}
			onChange={onChangeClientData}
		/>
	)
})
