import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import type { clientDataStateMap } from "../../storeTypes/clientDataState.map"
import { getClientDataSelector } from "../getClientData/getClientData.selector"

export const [useGetClientDataInfoSelector, getClientDataInfoSelector] = buildCreateSelector(
	[getClientDataSelector],
	(state: clientDataStateMap) => state?.info
)
