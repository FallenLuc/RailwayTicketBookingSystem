import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { passengersAdapter } from "../../slices/formPassengers.slice"
import type { formPassengersStateMap } from "../../storeTypes/formPassengersState.map"
import { getFormPassengersSelector } from "../getFormPassengers/getFormPassengers.selector"

export const [useGetFormPassengersInitedSelector, getFormPassengersInitedSelector] =
	buildCreateSelector(
		[getFormPassengersSelector],
		(state: formPassengersStateMap) => state._initedPassengers ?? false
	)

const initialState = passengersAdapter.getInitialState()

export const { selectAll: getFormPassengersDataSelector } =
	passengersAdapter.getSelectors<mainStateMap>(state => state?.formPassengers || initialState)

export const [useGetFormPassengersDataSelector] = buildSelector(getFormPassengersDataSelector)
