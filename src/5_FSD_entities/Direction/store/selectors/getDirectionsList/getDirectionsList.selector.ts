import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import type { mainStateMap } from "@store/storeTypes/mainState.map"

export const [useGetDirectionsListSelector, getDirectionsListSelector] = buildSelector(
	(state: mainStateMap) => state.directionsList
)
