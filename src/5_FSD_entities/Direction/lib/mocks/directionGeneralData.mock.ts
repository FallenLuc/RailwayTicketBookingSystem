import type { DeepPartial } from "@customTypes/global.types"
import { uid } from "uid"
import type { directionDataType, directionGeneralDataType } from "../../types/directionData.type"
import { directionDataMock } from "./directionData.mock"

type optionsType = {
	arrival: boolean
}

export const directionGeneralDataMock = (
	generalParams?: DeepPartial<directionGeneralDataType>,
	departureParams?: Partial<directionDataType>,
	arrivalParams?: Partial<directionDataType>,
	options: optionsType = { arrival: false }
): directionGeneralDataType => {
	let arrival = undefined

	if (options.arrival) {
		arrival = directionDataMock(arrivalParams)
	}

	const departure = directionDataMock(departureParams)

	return {
		id: generalParams?.id || uid(),
		have_first_class: generalParams?.have_first_class || false,
		have_second_class: generalParams?.have_second_class || false,
		have_third_class: generalParams?.have_third_class || false,
		have_fourth_class: generalParams?.have_fourth_class || false,
		have_wifi: generalParams?.have_wifi || false,
		have_air_conditioning: generalParams?.have_air_conditioning || false,
		is_express: generalParams?.is_express || false,
		min_price: generalParams?.min_price || 2024,
		available_seats: generalParams?.available_seats || 24,
		available_seats_info: generalParams?.available_seats_info || {
			second: 32,
			third: 96,
			first: 65,
			fourth: 66
		},
		departure: departure,
		arrival: arrival
	}
}
