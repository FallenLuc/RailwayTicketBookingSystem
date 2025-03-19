import { buildSelector } from "@helpers/buildSelector/buildSelector.helper"
import type { mainStateMap } from "@store/storeTypes/mainState.map"

export const [_, getClientDataSelector] = buildSelector((state: mainStateMap) => state.clientData)
