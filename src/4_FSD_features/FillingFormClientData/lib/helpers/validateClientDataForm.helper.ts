import type { clientDataType } from "@entities/Client"

export function validateClientDataForm(clientData: clientDataType) {
	const validatedClientData = { ...clientData }

	const isValidSurName = /^[А-Яа-я\s-]+$/.test(clientData.surName.value)
	const isValidFirstName = /^[А-Яа-я\s-]+$/.test(clientData.firstName.value)
	const isValidPhoneNumber = /^\+\d\d\d\d\d\d\d\d\d\d\d$/.test(clientData.phoneNumber.value)
	const isValidEmail = /^[A-Za-z\\.-]@[A-Za-z\\.-]\.[A-Za-z\\.-]/.test(clientData.email.value)

	validatedClientData.surName = { ...clientData.surName, isValid: isValidSurName }
	validatedClientData.firstName = { ...clientData.firstName, isValid: isValidFirstName }
	validatedClientData.phoneNumber = { ...clientData.phoneNumber, isValid: isValidPhoneNumber }
	validatedClientData.email = { ...clientData.email, isValid: isValidEmail }

	return {
		validatedClientData,
		isValid: isValidEmail && isValidSurName && isValidFirstName && isValidPhoneNumber
	}
}
