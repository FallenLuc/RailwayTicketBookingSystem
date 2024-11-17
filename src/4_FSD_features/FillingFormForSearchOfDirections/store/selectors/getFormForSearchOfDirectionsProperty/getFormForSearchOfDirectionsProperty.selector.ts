import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import { getFormForSearchOfDirectionsSelector } from "../getFormForSearchOfDirections/getFormForSearchOfDirections.selector"
import type { formForSearchOfDirectionsStateMap } from "../../storeTypes/formForSearchOfDirectionsState.map"

export const [
	useGetFormForSearchOfDirectionsHasDepartureDirectionsSelector,
	getFormForSearchOfDirectionsHasDepartureDirectionsSelector
] = buildCreateSelector(
	[getFormForSearchOfDirectionsSelector],
	(state: formForSearchOfDirectionsStateMap) => state?.hasDepartureDirections || false
)

export const [
	useGetFormForSearchOfDirectionsIsValidFormSelector,
	getFormForSearchOfDirectionsIsValidFormSelector
] = buildCreateSelector(
	[getFormForSearchOfDirectionsSelector],
	(state: formForSearchOfDirectionsStateMap) => state?.isValidForm || false
)

export const [
	useGetFormForSearchOfDirectionsDataSelector,
	getFormForSearchOfDirectionsDataSelector
] = buildCreateSelector(
	[getFormForSearchOfDirectionsSelector],
	(state: formForSearchOfDirectionsStateMap) => state?.data
)
