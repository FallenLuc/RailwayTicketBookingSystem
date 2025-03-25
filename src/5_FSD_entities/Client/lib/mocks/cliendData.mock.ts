import type { DeepPartial } from "@customTypes/global.types"
import type { clientDataType } from "../../types/clientData.type"

export function clientDataMock(data?: DeepPartial<clientDataType>): clientDataType {
	return {
		surName: {
			isValid: data?.surName?.isValid ?? true,
			value: data?.surName?.value || "Меридиан"
		},
		firstName: {
			isValid: data?.firstName?.isValid ?? true,
			value: data?.firstName?.value || "Люцифер"
		},
		lastName: {
			isValid: data?.lastName?.isValid ?? true,
			value: data?.lastName?.value || ""
		},
		phoneNumber: {
			isValid: data?.phoneNumber?.isValid ?? true,
			value: data?.phoneNumber?.value || "+79254102724"
		},
		email: {
			isValid: data?.email?.isValid ?? true,
			value: data?.email?.value || "fallen.luc.public@meridiansteam.com"
		},
		payMethod: data?.payMethod || "online"
	}
}
