import type { cityDataType } from "@entities/City"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import type { formForSearchOfDirectionsStateMap } from "../storeTypes/formForSearchOfDirectionsState.map"

const initialState: formForSearchOfDirectionsStateMap = {
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

			let data: formForSearchOfDirectionsStateMap["data"] = { ...state.data, ...parametres }

			data = Object.fromEntries(
				Object.entries(data).filter(([_, value]) => Boolean(value) || value === 0)
			)

			state.data = { ...data }

			state.isValidForm = Boolean(state?.data?.fromCity) && Boolean(state?.data?.toCity)
		},
		clearParametres: state => {
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
