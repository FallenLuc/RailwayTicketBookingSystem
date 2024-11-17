import type { cityDataType } from "../../City"

export type carriagePriceType = {
	price: number
	top_price: number
	bottom_price: number
	side_price: number
	linens_price: number
	wifi_price: number
}

export type carriageClassType = "first" | "second" | "third" | "fourth"

export type seatDataType = {
	index: number
	available: boolean
}

export type carriageDataType = {
	_id: string
	name: string
	class_type: carriageClassType
	have_wifi: boolean
	have_air_conditioning: boolean
	avaliable_seats: number
	is_linens_included: boolean
	seats: seatDataType[]
} & carriagePriceType

export type trainDataType = {
	_id: string
	name: string
}

export type stationDataType = {
	railway_station_name: string
	city: cityDataType
	datetime: number
}

export type directionDataType = {
	_id: string
	have_first_class: boolean
	have_second_class: boolean
	have_third_class: boolean
	have_fourth_class: boolean
	have_wifi: boolean
	have_air_conditioning: boolean
	duration: number
	min_price: number
	from: stationDataType
	to: stationDataType
	train: trainDataType
	price_info: Record<carriageClassType, carriagePriceType>
	seats_info: Record<carriageClassType, number>
}

export type directionsGeneralDataFromServerType = {
	have_first_class: boolean
	have_second_class: boolean
	have_third_class: boolean
	have_fourth_class: boolean
	have_wifi: boolean
	have_air_conditioning: boolean
	is_express: boolean
	min_price: number
	total_avaliable_seats: number
	arrival: directionDataType
	departure: directionDataType
}

export type directionsGeneralDataType = {
	id: string
} & directionsGeneralDataFromServerType
