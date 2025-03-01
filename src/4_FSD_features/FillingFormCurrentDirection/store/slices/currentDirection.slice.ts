import type { DeepPartial } from "@customTypes/global.types"
import type { carriageDataType } from "@entities/Carriage"
import type { directionGeneralDataType } from "@entities/Direction"
import type { passengerDataType } from "@entities/Passenger"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import { uid } from "uid"
import type { currentDirectionMapState } from "../storeTypes/currentDirectionMapState.map"

const initialState: currentDirectionMapState = {
	directionInfo: undefined,
	carriageInfo: undefined,
	seatsInfo: 1,
	sum: 0,
	passengers: undefined,
	isValidPassengers: false
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

			for (let count = 0; count < state.seatsInfo; count++) {
				const passenger: passengerDataType = {
					id: uid(),
					surname: "",
					firstName: "",
					lastName: "",
					sex: "male",
					dateBirth: "",
					isLimitedMobility: false,
					seriesPassport: undefined,
					numberPassport: undefined
				}

				arrayPassengers.push(passenger)
			}

			state.passengers = arrayPassengers
		},
		setPassengersInfo: (
			state,
			action: PayloadAction<Omit<DeepPartial<passengerDataType>, "id"> & { id: string }>
		) => {
			const newParametres = Object.fromEntries(
				Object.entries(action.payload).filter(([key]) => key !== "id")
			)

			const newPassengers = state?.passengers?.map(passenger => {
				if (passenger.id === action.payload.id) {
					return { ...passenger, newParametres }
				}

				return passenger
			})

			state.passengers = newPassengers

			let isValid = true

			for (let count = 0; count < (state?.passengers?.length ?? 0); count++) {
				const passenger = state?.passengers?.[count]
				for (const key in passenger) {
					if (Object.prototype.hasOwnProperty.call(passenger, key)) {
						const value = passenger[key as keyof passengerDataType]
						if (value === undefined || value === "") {
							isValid = false
							break
						}
					}
				}
			}

			state.isValidPassengers = isValid
		}
	}
})

export const {
	actions: currentDirectionActions,
	reducer: currentDirectionReducer,
	useActions: useCurrentDirectionActions
} = currentDirectionSlice

// To Hold написать тест
