import type { directionsGeneralDataType } from "../../../types/directionData.type"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type {
	directionFormParametres,
	directionsDisplayParametres
} from "../../../types/directionFormParametres.type"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import type { directionsListStateMap } from "../../storeTypes/directionsListState.map"
import { getDirections } from "../../../api/getDirections.rtkq"

export const fetchDirectionsThunk = createAsyncThunk<
	directionsGeneralDataType[],
	directionFormParametres & directionsDisplayParametres,
	thunkConfigType<directionsListStateMap["error"]>
>("searchingDirections/fetchDirections", async (parametres, thunkAPI) => {
	const { dispatch, rejectWithValue } = thunkAPI
	try {
		const data = await dispatch(getDirections(parametres)).unwrap()

		if (data.length === 0) {
			return rejectWithValue("no data")
		}

		return data
	} catch {
		return rejectWithValue("error with request directions")
	}
})

// To Feature сделать обертку с bind dispatch на async Thunk
