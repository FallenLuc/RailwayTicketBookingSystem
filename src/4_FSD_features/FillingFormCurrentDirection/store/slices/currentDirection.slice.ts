import type { carriageDataType } from "@entities/Carriage"
import type { directionGeneralDataType } from "@entities/Direction"
import type { passengerDataType } from "@entities/Passenger"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import { createEntityAdapter } from "@reduxjs/toolkit"
import { uid } from "uid"
import type { currentDirectionMapState } from "../storeTypes/currentDirectionMapState.map"

export const passengersAdapter = createEntityAdapter<passengerDataType>()

const initialState: currentDirectionMapState = {
	directionInfo: undefined,
	carriageInfo: undefined,
	seatsInfo: 1,
	_initedPassenger: false,
	sum: 0,
	passengers: passengersAdapter.getInitialState()
}

const currentDirectionSlice = buildSlice({
	name: "currentDirection",
	initialState,
	reducers: {
		setCurrentDirection: (state, action: PayloadAction<directionGeneralDataType>) => {
			state.directionInfo = action.payload?.departure
		},
		setCurrentCarriage: (state, action: PayloadAction<carriageDataType>) => {
			state.carriageInfo = action.payload
		},
		setChosenSeatsInfo: (state, action: PayloadAction<number>) => {
			state.seatsInfo = action.payload
		},
		calculateSum: state => {
			let sum = 0

			if (state.carriageInfo) {
				if (state.seatsInfo && state.carriageInfo.top_price) {
					sum = state.carriageInfo.top_price * state.seatsInfo
				}

				if (state.carriageInfo.have_wifi) {
					sum += state.carriageInfo.wifi_price || 0
				}

				if (state.carriageInfo.is_linens_included) {
					sum += state.carriageInfo.linens_price || 0
				}
			}

			state.sum = sum
		},
		initPassengers: state => {
			const arrayPassengers = []

			if (!state._initedPassenger) {
				state._initedPassenger = true
				for (let count = 0; count < state.seatsInfo; count++) {
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

				passengersAdapter.setAll(state.passengers, arrayPassengers)
			}
		},
		setPassengersInfo: (
			state,
			action: PayloadAction<Omit<Partial<passengerDataType>, "id"> & { id: string }>
		) => {
			passengersAdapter.updateOne(state.passengers, {
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
				passengersAdapter.updateMany(state.passengers, validatedPassengers)
			}
		}
	}
})

export const {
	actions: currentDirectionActions,
	reducer: currentDirectionReducer,
	useActions: useCurrentDirectionActions
} = currentDirectionSlice

// To Hold написать тест
// To Feature вынести passengers в отдельную фичу FillingFormPassengers
