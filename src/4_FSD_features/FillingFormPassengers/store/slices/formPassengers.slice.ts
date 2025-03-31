import { PASSENGERS } from "@constants/localStorage.constant"
import type { passengerDataType } from "@entities/Passenger"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import { createEntityAdapter, type PayloadAction } from "@reduxjs/toolkit"
import { uid } from "uid"
import type { formPassengersStateMap } from "../storeTypes/formPassengersState.map"

const initialState: formPassengersStateMap = {
	ids: [],
	entities: {}
}

export const passengersAdapter = createEntityAdapter<passengerDataType>()

const formPassengersSlice = buildSlice({
	name: "formPassengers",
	initialState: passengersAdapter.getInitialState(initialState),
	reducers: {
		initPassengers: (state, action: PayloadAction<number>) => {
			const seatsCount = action.payload

			const savedPassengers = localStorage.getItem(PASSENGERS) || "[]"

			let arrayPassengers: passengerDataType[] =
				JSON.parse(savedPassengers) || passengersAdapter.getSelectors().selectAll(state)

			if (!arrayPassengers.length || arrayPassengers.length !== seatsCount) {
				const passengers = []
				localStorage.removeItem(PASSENGERS)

				for (let count = 0; count < seatsCount; count++) {
					const defaultPassenger: passengerDataType = {
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

					passengers.push(defaultPassenger)
				}

				arrayPassengers = [...passengers]
			}

			passengersAdapter.setAll(state, arrayPassengers)
		},
		setPassengersInfo: (
			state,
			action: PayloadAction<Omit<Partial<passengerDataType>, "id"> & { id: string }>
		) => {
			passengersAdapter.updateOne(state, {
				id: action.payload.id,
				changes: action.payload
			})

			const passengers = passengersAdapter.getSelectors().selectAll(state)
			localStorage.setItem(PASSENGERS, JSON.stringify(passengers))
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

				const passengers = passengersAdapter.getSelectors().selectAll(state)
				localStorage.setItem(PASSENGERS, JSON.stringify(passengers))
			}
		}
	}
})

export const {
	reducer: formPassengersReducer,
	actions: formPassengersActions,
	useActions: useFormPassengersActions
} = formPassengersSlice
