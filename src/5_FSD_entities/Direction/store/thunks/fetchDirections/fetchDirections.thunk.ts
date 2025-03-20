import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"
import { getDirections } from "../../../api/getDirections.rtkq"
import type { directionsDataFromServerType } from "../../../types/directionData.type"
import type {
	directionDisplayParametres,
	directionFormParametres
} from "../../../types/directionFormParametres.type"

export const fetchDirectionsThunk = createAsyncThunk<
	directionsDataFromServerType,
	directionFormParametres & directionDisplayParametres,
	thunkConfigType<string>
>("Direction/fetchDirections", async (parametres, thunkAPI) => {
	const { dispatch, rejectWithValue } = thunkAPI
	try {
		const data = await dispatch(getDirections(parametres)).unwrap()

		if (data.items.length === 0) {
			return rejectWithValue("no passenger")
		}

		return data
	} catch {
		return rejectWithValue("error with request directions")
	}
})

// To Feature сделать обертку с bind dispatch на async Thunk
// To Hold: написать тест
