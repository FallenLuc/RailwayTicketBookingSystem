import type { passengerDataType } from "@entities/Passenger"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import { createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit"
import { uid } from "uid"
import type { formPassengersStateMap } from "../storeTypes/formPassengersState.map"

const initialState: formPassengersStateMap = {
	_initedPassengers: false,
	ids: [],
	entities: {}
}

export const passengersAdapter = createEntityAdapter<passengerDataType>()

const formPassengersSlice = buildSlice({
	name: "formPassengers",
	initialState: passengersAdapter.getInitialState(initialState),
	reducers: {
		initPassengers: (state, action: PayloadAction<number>) => {
			const arrayPassengers = []

			const seatsCount = action.payload

			if (!state._initedPassengers) {
				state._initedPassengers = true
				for (let count = 0; count < seatsCount; count++) {
					const passenger: passengerDataType = {
						id: uid(),
						surname: { isValid: true, value: "" },
						firstName: { isValid: true, value: "" },
						lastName: { isValid: true, value: "" },
						sex: "male",
						dateBirth: { isValid: true, value: "" },
						isLimitedMobility: false,
						seriesPassport: { isValid: true, value: "" },
						numberPassport: { isValid: true, value: "" }
					}

					arrayPassengers.push(passenger)
				}

				passengersAdapter.setAll(state, arrayPassengers)
			}
		},
		setPassengersInfo: (
			state,
			action: PayloadAction<Omit<Partial<passengerDataType>, "id"> & { id: string }>
		) => {
			passengersAdapter.updateOne(state, {
				id: action.payload.id,
				changes: action.payload
			})
		},
		verifyFields: (
			state,
			action: PayloadAction<{
				isAllValid: boolean
				validatedPassengers: { id: string; changes: passengerDataType }[]
			}>
		) => {
			const { validatedPassengers, isAllValid } = action.payload
			if (!isAllValid) {
				passengersAdapter.updateMany(state, validatedPassengers)
			}
		}
	}
})

export const {
	reducer: formPassengersReducer,
	actions: formPassengersActions,
	useActions: useFormPassengersActions
} = formPassengersSlice
