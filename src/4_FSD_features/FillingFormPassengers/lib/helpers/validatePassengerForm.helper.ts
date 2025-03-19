import type { passengerDataType } from "@entities/Passenger/types/passengerData.type"

export function validatePassengerForm(passenger: passengerDataType) {
	const validatedPassenger = { ...passenger }
	const isValidFirstName = /^[А-Яа-я\s-]+$/.test(passenger.firstName.value)
	const isValidSurName = /^[А-Яа-я\s-]+$/.test(passenger.surname.value)
	const isValidLastName = /^[А-Яа-я\s-]+$|^$/.test(passenger.lastName.value)
	const isValidDateBirth = /^\d\d\.\d\d\.\d\d\d\d$/.test(passenger.dateBirth.value)
	const isValidSeriesPassport = /^\d\d\d\d$/.test(passenger.seriesPassport.value)
	const isValidNumberPassport = /^\d\d\d\d\d\d$/.test(passenger.numberPassport.value)

	validatedPassenger.firstName = { ...passenger.firstName, isValid: isValidFirstName }
	validatedPassenger.surname = { ...passenger.surname, isValid: isValidSurName }
	validatedPassenger.lastName = { ...passenger.lastName, isValid: isValidLastName }
	validatedPassenger.dateBirth = { ...passenger.dateBirth, isValid: isValidDateBirth }
	validatedPassenger.seriesPassport = {
		...passenger.seriesPassport,
		isValid: isValidSeriesPassport
	}
	validatedPassenger.numberPassport = {
		...passenger.numberPassport,
		isValid: isValidNumberPassport
	}

	return {
		validatedPassenger,
		isValid:
			isValidNumberPassport &&
			isValidFirstName &&
			isValidSurName &&
			isValidLastName &&
			isValidDateBirth &&
			isValidSeriesPassport
	}
}
