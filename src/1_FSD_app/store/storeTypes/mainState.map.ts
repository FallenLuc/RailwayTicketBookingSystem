import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { directionsListStateMap } from "@entities/Direction"
import type { clientDataStateMap } from "@features/FillingFormClientData"
import type { currentDirectionMapState } from "@features/FillingFormCurrentDirection"
import type { formForSearchOfDirectionsStateMap } from "@features/FillingFormForSearchOfDirections"
import type { formPassengersStateMap } from "@features/FillingFormPassengers"

export type mainStateMap = {
	formForSearchOfDirectionsStateMap: formForSearchOfDirectionsStateMap
	currentDirection: currentDirectionMapState
	directionsList: directionsListStateMap
	formPassengers: formPassengersStateMap
	clientData: clientDataStateMap

	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
