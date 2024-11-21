import type { cityDataType } from "@entities/City"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import type { formForSearchOfDirectionsStateMap } from "../storeTypes/formForSearchOfDirectionsState.map"

const initialState: formForSearchOfDirectionsStateMap = {
	hasDepartureDirections: false,
	isValidForm: false,
	data: undefined
}

export const citiesAdapter = createEntityAdapter<cityDataType>()

const formForSearchOfDirectionsSlice = buildSlice({
	name: "formForSearchOfDirections",
	initialState,
	reducers: {
		setParametres: (
			state,
			action: PayloadAction<formForSearchOfDirectionsStateMap["data"]>
		) => {
			const parametres = action.payload

			state.hasDepartureDirections = Boolean(parametres?.date_end)

			state.data = { ...state.data, ...parametres }

			state.isValidForm = Boolean(state?.data?.fromCity) && Boolean(state?.data?.toCity)
		},
		clearParametres: state => {
			state.hasDepartureDirections = false
			state.data = undefined
			state.isValidForm = false
		},

		changeDirection: state => {
			if (state.data) {
				const staged = state.data?.toCity

				state.data.toCity = state.data?.fromCity

				state.data.fromCity = staged
			}
		}
	}
})

export const {
	actions: formForSearchDirectionsActions,
	reducer: formForSearchDirectionsReducer,
	useActions: useFormForSearchDirectionsActions
} = formForSearchOfDirectionsSlice
