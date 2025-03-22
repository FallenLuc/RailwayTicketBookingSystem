import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getClientDataSelector } from "./getClientData.selector"

describe("getClientDataSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			clientData: {
				info: {
					firstName: {
						isValid: true,
						value: "Lucifer"
					}
				}
			}
		}
		expect(getClientDataSelector(state as mainStateMap)).toEqual({
			info: {
				firstName: {
					isValid: true,
					value: "Lucifer"
				}
			}
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getClientDataSelector(state as mainStateMap)).toEqual(undefined)
	})
})
