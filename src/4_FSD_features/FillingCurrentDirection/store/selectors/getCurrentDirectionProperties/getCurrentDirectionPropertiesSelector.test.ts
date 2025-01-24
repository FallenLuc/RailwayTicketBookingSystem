import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import {
	getCurrentDirectionFromTripSelector,
	getCurrentDirectionToTripSelector
} from "./getCurrentDirectionProperties.selector"

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

describe("getCurrentDirectionFromTripSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				fromTrip: {
					_id: "1"
				}
			}
		}
		expect(getCurrentDirectionFromTripSelector()(state as mainStateMap)).toEqual({
			_id: "1"
		})
	})

	test("get getCurrentDirectionFromTripSelector state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionToTripSelector()(state as mainStateMap)).toEqual(undefined)
	})
})
