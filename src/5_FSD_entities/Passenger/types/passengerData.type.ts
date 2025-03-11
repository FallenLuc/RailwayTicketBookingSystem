import type { sexType } from "@customTypes/common.types"

export type passengerDataType = {
	id: string
	surname: fieldWithValidationType
	firstName: fieldWithValidationType
	lastName: fieldWithValidationType
	sex: sexType
	dateBirth: fieldWithValidationType
	isLimitedMobility: boolean
	seriesPassport: fieldWithValidationType
	numberPassport: fieldWithValidationType
}

export type fieldWithValidationType = {
	isValid: boolean
	value: string
}
