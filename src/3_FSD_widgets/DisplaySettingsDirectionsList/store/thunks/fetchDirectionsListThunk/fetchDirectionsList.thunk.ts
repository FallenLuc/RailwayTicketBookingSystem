// To Hold: написать тест

import { fetchDirectionsThunk } from "@entities/Direction"
import {
	getFormForSearchOfDirectionsDataForRequestSelector,
	getFormForSearchOfDirectionsIsValidFormSelector
} from "@features/FillingFormForSearchOfDirections/store/selectors/getFormForSearchOfDirectionsProperty/getFormForSearchOfDirectionsProperty.selector"
import { addQueryParams } from "@helpers/addQueryParams/addQueryParams.helper"
import { createAsyncThunk } from "@reduxjs/toolkit"
import type { thunkConfigType } from "@store/storeTypes/thunks.type"

export const fetchDirectionsListThunk = createAsyncThunk<
	undefined,
	boolean | undefined,
	thunkConfigType<undefined>
>(
	"DisplaySettingsDirectionsList/fetchDirectionsList",
	async (isAllowedUpdateParams = true, thunkAPI) => {
		const { dispatch, getState } = thunkAPI

		const isValid = getFormForSearchOfDirectionsIsValidFormSelector()(getState())
		const formParametres = getFormForSearchOfDirectionsDataForRequestSelector()(getState())

		if (isValid && formParametres) {
			if (isAllowedUpdateParams) {
				addQueryParams(formParametres)
			}

			dispatch(fetchDirectionsThunk(formParametres))
		}

		return undefined
	}
)
