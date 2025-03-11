import type { passengerDataType } from "@entities/Passenger"
import type { EntityState } from "@reduxjs/toolkit"

export type formPassengersStateMap = {
	_initedPassengers: boolean
} & EntityState<passengerDataType, string>
