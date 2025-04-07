import { CLIENT_DATA } from "@constants/localStorage.constant"
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
			const savedClientData = localStorage.getItem(CLIENT_DATA)
			if (savedClientData) {
				state.info = JSON.parse(savedClientData)
			}
		},
		setClientData: (state, action: PayloadAction<Partial<clientDataType>>) => {
			state.info = { ...state.info, ...action.payload }
			localStorage.setItem(CLIENT_DATA, JSON.stringify(state.info))
		}
	}
})

export const {
	actions: clientDataActions,
	reducer: clientDataReducer,
	useActions: useClientDataActions
} = clientDataSlice
