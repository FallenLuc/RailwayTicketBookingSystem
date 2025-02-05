import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { directionsListStateMap } from "@entities/Direction"
import type { currentDirectionMapState } from "@features/FillingCurrentDirection"
import type { formForSearchOfDirectionsStateMap } from "@features/FillingFormForSearchOfDirections"

export type mainStateStaticMap = {
	formForSearchOfDirectionsStateMap: formForSearchOfDirectionsStateMap
	currentDirection: currentDirectionMapState
	directionsList: directionsListStateMap

	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
