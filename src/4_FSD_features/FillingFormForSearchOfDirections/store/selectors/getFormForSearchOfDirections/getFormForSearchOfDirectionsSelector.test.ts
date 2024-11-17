import { describe, expect, test } from "@jest/globals"
import { getFormForSearchOfDirectionsSelector } from "./getFormForSearchOfDirections.selector"
import type { DeepPartial } from "@customTypes/global.types"
import type { mainStateMap } from "@store/storeTypes/mainState.map"

describe("getFormForSearchOfDirectionsSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formForSearchOfDirectionsStateMap: {
				isValidForm: true,
				hasDepartureDirections: true,
				data: {
					from_city_id: "1"
				}
			}
		}
		expect(getFormForSearchOfDirectionsSelector(state as mainStateMap)).toEqual({
			isValidForm: true,
			hasDepartureDirections: true,
			data: {
				from_city_id: "1"
			}
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormForSearchOfDirectionsSelector(state as mainStateMap)).toEqual(undefined)
	})
})
