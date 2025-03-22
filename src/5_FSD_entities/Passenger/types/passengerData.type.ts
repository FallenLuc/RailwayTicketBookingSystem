import type { sexType } from "@customTypes/common.types"

export type passengerDataType = {
	id: string
	surname: fieldPassengerDataWithValidationType
	firstName: fieldPassengerDataWithValidationType
	lastName: fieldPassengerDataWithValidationType
	sex: sexType
	dateBirth: fieldPassengerDataWithValidationType
	isLimitedMobility: boolean
	seriesPassport: fieldPassengerDataWithValidationType
	numberPassport: fieldPassengerDataWithValidationType
}

export type fieldPassengerDataWithValidationType = {
	isValid: boolean
	value: string
}

export type passengerDataForPayType = {
	is_adult: true //нужно для запроса, не используется в логике
	first_name: string
	last_name: string
	patronymic: string
	gender: boolean
	birthday: string
	document_type: "паспорт" //нужно для запроса, не используется в логике
	document_data: string
}
