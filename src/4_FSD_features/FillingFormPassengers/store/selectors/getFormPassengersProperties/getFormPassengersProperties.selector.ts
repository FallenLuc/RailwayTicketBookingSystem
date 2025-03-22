import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { passengersAdapter } from "../../slices/formPassengers.slice"

const initialState = passengersAdapter.getInitialState()

export const { selectAll: getFormPassengersDataSelector } =
	passengersAdapter.getSelectors<mainStateMap>(state => state?.formPassengers || initialState)

export const [useGetFormPassengersDataSelector] = buildSelector(getFormPassengersDataSelector)
