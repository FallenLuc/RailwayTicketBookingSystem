import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getClientDataInfoSelector } from "./getClientDataProperties.selector"

describe("getClientDataInfoSelector", () => {
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
		expect(getClientDataInfoSelector()(state as mainStateMap)).toEqual({
			firstName: {
				isValid: true,
				value: "Lucifer"
			}
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getClientDataInfoSelector()(state as mainStateMap)).toEqual(undefined)
	})
})
