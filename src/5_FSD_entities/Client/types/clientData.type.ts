import type { payMethodType } from "@customTypes/common.types"

export type clientDataType = {
	firstName: fieldClientDataWithValidationType
	surName: fieldClientDataWithValidationType
	lastName: fieldClientDataWithValidationType
	email: fieldClientDataWithValidationType
	phoneNumber: fieldClientDataWithValidationType
	payMethod: payMethodType
}

export type fieldClientDataWithValidationType = {
	isValid: boolean
	value: string
}
