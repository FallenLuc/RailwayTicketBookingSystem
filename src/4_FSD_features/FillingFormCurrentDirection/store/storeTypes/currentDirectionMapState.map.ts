import type { carriageDataType } from "@entities/Carriage"
import type { directionDataType } from "@entities/Direction/types/directionData.type"
import type { passengerDataType } from "@entities/Passenger/types/passengerData.type"

export type currentDirectionMapState = {
	directionInfo?: directionDataType
	carriageInfo?: carriageDataType
	seatsInfo: number
	sum: number
	passengers?: passengerDataType[]
	isValidPassengers: boolean
}
