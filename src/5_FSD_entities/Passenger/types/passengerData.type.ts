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
