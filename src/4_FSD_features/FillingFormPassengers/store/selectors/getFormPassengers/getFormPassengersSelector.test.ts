import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getFormPassengersSelector } from "./getFormPassengers.selector"

describe("getFormPassengersSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formPassengers: {
				ids: ["1"]
			}
		}
		expect(getFormPassengersSelector(state as mainStateMap)).toEqual({
			ids: ["1"]
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormPassengersSelector(state as mainStateMap)).toEqual(undefined)
	})
})
