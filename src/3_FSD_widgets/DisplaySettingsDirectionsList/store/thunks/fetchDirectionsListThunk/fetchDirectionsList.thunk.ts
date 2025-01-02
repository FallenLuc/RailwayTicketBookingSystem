// To Hold: написать тест

import { fetchDirectionsThunk } from "@entities/Direction"
import {
	getFormForSearchOfDirectionsDataForRequestSelector,
	getFormForSearchOfDirectionsIsValidFormSelector
} from "@features/FillingFormForSearchOfDirections/store/selectors/getFormForSearchOfDirectionsProperty/getFormForSearchOfDirectionsProperty.selector"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"

export const fetchDirectionsListThunk = createAsyncThunk<
	undefined,
	undefined,
	thunkConfigType<undefined>
>("DisplaySettingsDirectionsList/fetchDirectionsList", async (parametres, thunkAPI) => {
	const { dispatch, getState } = thunkAPI

	const isValid = getFormForSearchOfDirectionsIsValidFormSelector()(getState())
	const formParametres = getFormForSearchOfDirectionsDataForRequestSelector()(getState())

	if (isValid && formParametres) {
		dispatch(fetchDirectionsThunk(formParametres))
	}

	return undefined
})
