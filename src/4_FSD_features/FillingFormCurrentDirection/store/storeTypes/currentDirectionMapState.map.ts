import type { carriageDataType } from "@entities/Carriage"
import type { directionDataType } from "@entities/Direction/types/directionData.type"
import type { passengerDataType } from "@entities/Passenger/types/passengerData.type"
import type { EntityState } from "@reduxjs/toolkit"

export type currentDirectionMapState = {
	directionInfo?: directionDataType
	carriageInfo?: carriageDataType
	seatsInfo: number
	sum: number
	_inited: boolean
	_initedPassenger: boolean
	passengers: EntityState<passengerDataType, string>
}
