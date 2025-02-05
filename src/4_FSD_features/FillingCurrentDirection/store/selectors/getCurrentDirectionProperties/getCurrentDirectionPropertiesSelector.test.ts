import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { getCurrentDirectionToTripSelector } from "./getCurrentDirectionProperties.selector"

describe("getCurrentDirectionToTripSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				toTrip: {
					_id: "1"
				}
			}
		}
		expect(getCurrentDirectionToTripSelector()(state as mainStateMap)).toEqual({
			_id: "1"
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionToTripSelector()(state as mainStateMap)).toEqual(undefined)
	})
})
