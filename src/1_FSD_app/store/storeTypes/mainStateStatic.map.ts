import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { directionsListStateMap } from "@entities/Direction"
import type { clientDataStateMap } from "@features/FillingFormClientData"
import type { formForSearchOfDirectionsStateMap } from "@features/FillingFormForSearchOfDirections"
import type { formPassengersStateMap } from "@features/FillingFormPassengers"
import type { currentDirectionMapState } from "src/4_FSD_features/FillingFormCurrentDirection"

export type mainStateStaticMap = {
	formForSearchOfDirectionsStateMap: formForSearchOfDirectionsStateMap
	currentDirection: currentDirectionMapState
	directionsList: directionsListStateMap
	formPassengers: formPassengersStateMap
	clientData: clientDataStateMap

	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
