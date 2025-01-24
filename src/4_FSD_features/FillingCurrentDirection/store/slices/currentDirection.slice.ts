import type { directionGeneralDataType } from "@entities/Direction"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { currentDirectionMapState } from "../storeTypes/currentDirectionMapState.map"

const initialState: currentDirectionMapState = {
	fromTrip: undefined,
	toTrip: undefined
}

const currentDirectionSlice = buildSlice({
	name: "currentDirection",
	initialState,
	reducers: {
		setCurrentDirection: (state, action: PayloadAction<directionGeneralDataType>) => {
			state.toTrip = action.payload?.departure
			state.fromTrip = action.payload?.arrival
		}
	}
})

export const {
	actions: currentDirectionActions,
	reducer: currentDirectionReducer,
	useActions: useCurrentDirectionActions
} = currentDirectionSlice

// To Hold написать тест
