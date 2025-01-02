import { SHOW_LIMITS } from "@constants/common.constant"
import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import {
	getFormForSearchOfDirectionsDataForRequestSelector,
	getFormForSearchOfDirectionsDataSelector,
	getFormForSearchOfDirectionsIsValidFormSelector
} from "./getFormForSearchOfDirectionsProperty.selector"

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
					fromCity: {
						name: "Москва"
					}
				}
			}
		}
		expect(getFormForSearchOfDirectionsDataSelector()(state as mainStateMap)).toEqual({
			fromCity: {
				name: "Москва"
			}
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormForSearchOfDirectionsDataSelector()(state as mainStateMap)).toEqual(undefined)
	})
})

describe("getFormForSearchOfDirectionsDataForRequestSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formForSearchOfDirectionsStateMap: {
				data: {
					fromCity: {
						name: "Москва",
						_id: "1"
					}
				},
				displayData: {
					limit: 10,
					offset: 5
				}
			}
		}
		expect(getFormForSearchOfDirectionsDataForRequestSelector()(state as mainStateMap)).toEqual(
			{
				from_city_id: "1",
				limit: 10,
				offset: 5
			}
		)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormForSearchOfDirectionsDataForRequestSelector()(state as mainStateMap)).toEqual(
			{ limit: SHOW_LIMITS[0], offset: 1 }
		)
	})
})
