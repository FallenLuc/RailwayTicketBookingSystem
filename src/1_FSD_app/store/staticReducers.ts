import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { directionsListSliceReducers } from "@entities/Direction"
import { formForSearchDirectionsReducer } from "@features/FillingFormForSearchOfDirections"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import type { mainStateStaticMap } from "./storeTypes/mainStateStatic.map"

export const staticReducers: ReducersMapObject<mainStateStaticMap> = {
	formForSearchOfDirectionsStateMap: formForSearchDirectionsReducer,
	directionsList: directionsListSliceReducers,
	[rtkBaseApi.reducerPath]: rtkBaseApi.reducer
}
