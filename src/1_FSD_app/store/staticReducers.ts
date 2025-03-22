import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { directionsListReducers } from "@entities/Direction"
import { clientDataReducer } from "@features/FillingFormClientData"
import { currentDirectionReducer } from "@features/FillingFormCurrentDirection"
import { formForSearchDirectionsReducer } from "@features/FillingFormForSearchOfDirections"
import { formPassengersReducer } from "@features/FillingFormPassengers"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import type { mainStateStaticMap } from "./storeTypes/mainStateStatic.map"

export const staticReducers: ReducersMapObject<mainStateStaticMap> = {
	formForSearchOfDirectionsStateMap: formForSearchDirectionsReducer,
	currentDirection: currentDirectionReducer,
	directionsList: directionsListReducers,
	formPassengers: formPassengersReducer,
	clientData: clientDataReducer,
	[rtkBaseApi.reducerPath]: rtkBaseApi.reducer
}
