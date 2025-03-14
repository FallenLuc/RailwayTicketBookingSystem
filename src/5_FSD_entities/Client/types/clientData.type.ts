import type { payMethodType } from "@customTypes/common.types"

export type clientDataType = {
	firstName: fieldWithValidationType
	surName: fieldWithValidationType
	lastName: fieldWithValidationType
	email: fieldWithValidationType
	phoneNumber: fieldWithValidationType
	payMethod: payMethodType
}

export type fieldWithValidationType = {
	isValid: boolean
	value: string
}
