import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import type { mainStateMap } from "@store/storeTypes/mainState.map"

export const [useGetFormForSearchOfDirectionsSelector, getFormForSearchOfDirectionsSelector] =
	buildSelector((state: mainStateMap) => state.formForSearchOfDirectionsStateMap)
