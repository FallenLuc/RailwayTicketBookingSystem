import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getFormPassengersDataSelector } from "./getFormPassengersProperties.selector"

describe("getCurrentDirectionPassengersSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			formPassengers: {
				ids: ["1", "2"],
				entities: {
					"1": {
						id: "1",
						firstName: { value: "Luc" }
					},
					"2": {
						id: "2",
						firstName: { value: "Lucifer" }
					}
				}
			}
		}
		expect(getFormPassengersDataSelector(state as mainStateMap)).toEqual([
			{ id: "1", firstName: { value: "Luc" } },
			{ id: "2", firstName: { value: "Lucifer" } }
		])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getFormPassengersDataSelector(state as mainStateMap)).toEqual([])
	})
})
