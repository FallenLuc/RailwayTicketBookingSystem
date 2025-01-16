import type { EntityState } from "@reduxjs/toolkit"
import type { directionGeneralDataType } from "../../types/directionData.type"

export type directionsListStateMap = {
	isLoading: boolean
	totalCount?: number
	error?: string
	_inited?: boolean
} & EntityState<directionGeneralDataType, string>
