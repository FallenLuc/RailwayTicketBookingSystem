import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import { getDirectionsListSelector } from "../getDirectionsList/getDirectionsList.selector"
import type { directionsListStateMap } from "../../storeTypes/directionsListState.map"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { directionsListAdapter } from "../../slices/directionsList..slice"
import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"

export const [useGetDirectionsListIsLoadingSelector, getDirectionsListIsLoadingSelector] =
	buildCreateSelector(
		[getDirectionsListSelector],
		(state?: directionsListStateMap) => state?.isLoading || false
	)

export const [useGetDirectionsListErrorSelector, getDirectionsListErrorSelector] =
	buildCreateSelector(
		[getDirectionsListSelector],
		(state?: directionsListStateMap) => state?.error
	)

export const { selectAll: getDirectionsListDataSelector } =
	directionsListAdapter.getSelectors<mainStateMap>(
		state => state?.directionsList || directionsListAdapter.getInitialState()
	)

export const [useGetDirectionsListDataSelector] = buildSelector(getDirectionsListDataSelector)
