import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { directionsListReducers } from "@entities/Direction"
import { clientDataReducer } from "@features/FillingFormClientData"
import { currentDirectionReducer } from "@features/FillingFormCurrentDirection"
import { formForSearchDirectionsReducer } from "@features/FillingFormForSearchOfDirections"
import { formPassengersReducer } from "@features/FillingFormPassengers"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { type mainStateMap } from "./storeTypes/mainState.map"

export function createReduxStore(initialState?: mainStateMap) {
	const rootReducer: ReducersMapObject<mainStateMap> = {
		formForSearchOfDirectionsStateMap: formForSearchDirectionsReducer,
		currentDirection: currentDirectionReducer,
		directionsList: directionsListReducers,
		formPassengers: formPassengersReducer,
		clientData: clientDataReducer,
		[rtkBaseApi.reducerPath]: rtkBaseApi.reducer
	}

	const appStore = configureStore({
		reducer: rootReducer,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({}).concat(rtkBaseApi.middleware)
	})

	return appStore
}
