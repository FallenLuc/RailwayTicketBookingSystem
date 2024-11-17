import type { rtkBaseApi } from "@api/instances/rtkBase.api"
import type { formForSearchOfDirectionsStateMap } from "@features/FillingFormForSearchOfDirections"

export type mainStateStaticMap = {
	formForSearchOfDirectionsStateMap: formForSearchOfDirectionsStateMap
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
