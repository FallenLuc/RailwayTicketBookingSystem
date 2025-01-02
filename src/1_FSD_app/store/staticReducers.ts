import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { formForSearchDirectionsReducer } from "@features/FillingFormForSearchOfDirections"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import type { mainStateStaticMap } from "./storeTypes/mainStateStatic.map"

export const staticReducers: ReducersMapObject<mainStateStaticMap> = {
	formForSearchOfDirectionsStateMap: formForSearchDirectionsReducer,
	[rtkBaseApi.reducerPath]: rtkBaseApi.reducer
}
