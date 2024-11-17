import type { directionsGeneralDataType } from "../../types/directionData.type"
import type { EntityState } from "@reduxjs/toolkit"

export type directionsListStateMap = {
	isLoading: boolean
	error?: string
} & EntityState<directionsGeneralDataType, directionsGeneralDataType["id"]>
