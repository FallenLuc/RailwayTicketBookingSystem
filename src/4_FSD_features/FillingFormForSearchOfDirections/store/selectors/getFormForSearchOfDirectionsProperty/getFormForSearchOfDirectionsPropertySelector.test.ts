import { describe, expect, test } from "@jest/globals"
import type { DeepPartial } from "@customTypes/global.types"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import {
	getFormForSearchOfDirectionsHasDepartureDirectionsSelector,
	getFormForSearchOfDirectionsIsValidFormSelector,
	getFormForSearchOfDirectionsDataSelector
} from "./getFormForSearchOfDirectionsProperty.selector"

describe("getFormForSearchOfDirectionsHasDepartureDirectionsSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formForSearchOfDirectionsStateMap: {
				hasDepartureDirections: true
			}
		}
		expect(
			getFormForSearchOfDirectionsHasDepartureDirectionsSelector()(state as mainStateMap)
		).toEqual(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(
			getFormForSearchOfDirectionsHasDepartureDirectionsSelector()(state as mainStateMap)
		).toEqual(false)
	})
})

describe("getFormForSearchOfDirectionsIsValidFormSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formForSearchOfDirectionsStateMap: {
				isValidForm: true
			}
		}
		expect(getFormForSearchOfDirectionsIsValidFormSelector()(state as mainStateMap)).toEqual(
			true
		)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormForSearchOfDirectionsIsValidFormSelector()(state as mainStateMap)).toEqual(
			false
		)
	})
})

describe("getFormForSearchOfDirectionsDataSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formForSearchOfDirectionsStateMap: {
				data: {
					from_city_id: "1"
				}
			}
		}
		expect(getFormForSearchOfDirectionsDataSelector()(state as mainStateMap)).toEqual({
			from_city_id: "1"
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormForSearchOfDirectionsDataSelector()(state as mainStateMap)).toEqual(undefined)
	})
})
