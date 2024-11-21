import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import { createEntityAdapter } from "@reduxjs/toolkit"
import type { directionsGeneralDataType } from "../../types/directionData.type"
import type { directionsListStateMap } from "../storeTypes/directionsListState.map"
import { fetchDirectionsThunk } from "../thunks/fetchDirections/fetchDirections.thunk"

const initialState: directionsListStateMap = {
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {}
}

export const directionsListAdapter = createEntityAdapter<directionsGeneralDataType>()

const directionsListSlice = buildSlice({
	name: "directionsList",
	initialState: directionsListAdapter.getInitialState<directionsListStateMap>(initialState),
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchDirectionsThunk.pending, state => {
				state.isLoading = true
				state.error = undefined
			})
			.addCase(fetchDirectionsThunk.fulfilled, (state, action) => {
				state.isLoading = false
				state.error = undefined

				directionsListAdapter.setAll(state, action.payload)
			})
			.addCase(fetchDirectionsThunk.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
	}
})

export const {
	actions: directionsListSliceActions,
	reducer: directionsListSliceReducers,
	useActions: useDirectionsListSliceUseActions
} = directionsListSlice
