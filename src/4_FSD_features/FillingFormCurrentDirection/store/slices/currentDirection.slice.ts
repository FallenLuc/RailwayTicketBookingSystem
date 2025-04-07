import { CARRIAGE_INFO, SEATS_INFO } from "@constants/localStorage.constant"
import type { carriageDataType } from "@entities/Carriage"
import type { directionGeneralDataType } from "@entities/Direction"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { currentDirectionMapState } from "../storeTypes/currentDirectionMapState.map"

const initialState: currentDirectionMapState = {
	directionInfo: undefined,
	carriageInfo: undefined,
	seatsInfo: 1,
	_inited: false,
	sum: 0
}

const currentDirectionSlice = buildSlice({
	name: "currentDirection",
	initialState,
	reducers: {
		initCurrentDirection: (state, action: PayloadAction<directionGeneralDataType>) => {
			if (!state._inited) {
				state._inited = true
				const savedSeatsInfo = localStorage.getItem(SEATS_INFO)
				const savedCarriageInfo = localStorage.getItem(CARRIAGE_INFO)

				if (savedSeatsInfo) {
					state.seatsInfo = parseInt(savedSeatsInfo)
				}

				if (savedCarriageInfo) {
					state.carriageInfo = JSON.parse(savedCarriageInfo)
				}

				state.directionInfo = action.payload?.departure
			}
		},

		setCurrentDirection: (state, action: PayloadAction<directionGeneralDataType>) => {
			state.directionInfo = action.payload?.departure
		},
		setCurrentCarriage: (state, action: PayloadAction<carriageDataType>) => {
			localStorage.setItem(CARRIAGE_INFO, JSON.stringify(state.carriageInfo))

			state.carriageInfo = action.payload
		},
		setChosenSeatsInfo: (state, action: PayloadAction<number>) => {
			localStorage.setItem(SEATS_INFO, action.payload.toString())

			state.seatsInfo = action.payload
		},
		resetSeatsInfo: state => {
			localStorage.removeItem(SEATS_INFO)
			state.seatsInfo = 1
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
		}
	}
})

export const {
	actions: currentDirectionActions,
	reducer: currentDirectionReducer,
	useActions: useCurrentDirectionActions
} = currentDirectionSlice
