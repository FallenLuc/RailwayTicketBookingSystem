import type { clientDataType } from "@entities/Client"
import { buildSlice } from "@helpers/buildSlice/buildSlice.helper"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { clientDataStateMap } from "../storeTypes/clientDataState.map"

const initialState: clientDataStateMap = {
	info: {
		phoneNumber: {
			isValid: true,
			value: ""
		},
		lastName: {
			isValid: true,
			value: ""
		},
		firstName: {
			isValid: true,
			value: ""
		},
		email: {
			isValid: true,
			value: ""
		},
		surName: {
			isValid: true,
			value: ""
		},
		payMethod: "online"
	}
}

const clientDataSlice = buildSlice({
	name: "clientData",
	initialState,
	reducers: {
		initClientData: state => {
			const savedClientData = JSON.parse(localStorage.getItem("clientData") || "")

			if (savedClientData) {
				state.info = savedClientData
			}
		},
		setClientData: (state, action: PayloadAction<clientDataType>) => {
			state.info = { ...state.info, ...action.payload }
		}
	}
})

export const {
	actions: clientDataActions,
	reducer: clientDataReducer,
	useActions: useClientDataActions
} = clientDataSlice
