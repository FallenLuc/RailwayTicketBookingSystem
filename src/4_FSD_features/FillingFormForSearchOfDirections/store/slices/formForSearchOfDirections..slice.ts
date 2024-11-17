import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { formForSearchOfDirectionsStateMap } from "../storeTypes/formForSearchOfDirectionsState.map"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { directionFormParametres } from "@entities/Direction"

const initialState: formForSearchOfDirectionsStateMap = {
	hasDepartureDirections: false,
	isValidForm: false,
	data: undefined
}

const formForSearchOfDirectionsSlice = buildSlice({
	name: "formForSearchOfDirections",
	initialState,
	reducers: {
		setParametres: (state, action: PayloadAction<directionFormParametres>) => {
			const parametres = action.payload

			state.hasDepartureDirections = Boolean(parametres.date_end)
			state.data = { ...state.data, ...parametres }

			state.isValidForm = Boolean(state.data.from_city_id) && Boolean(state.data.to_city_id)
		},
		clearParametres: state => {
			state.hasDepartureDirections = false
			state.data = undefined
			state.isValidForm = false
		}
	}
})

export const {
	actions: formForSearchDirectionsActions,
	reducer: formForSearchDirectionsReducer,
	useActions: useFormForSearchDirectionsActions
} = formForSearchOfDirectionsSlice
