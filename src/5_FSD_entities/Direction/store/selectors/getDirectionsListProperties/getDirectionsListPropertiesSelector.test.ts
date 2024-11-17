import { describe, expect, test } from "@jest/globals"
import type { DeepPartial } from "@customTypes/global.types"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import {
	getDirectionsListIsLoadingSelector,
	getDirectionsListErrorSelector,
	getDirectionsListDataSelector
} from "./getDirectionsListProperties.selector"

describe("getDirectionsListIsLoadingSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				isLoading: true
			}
		}
		expect(getDirectionsListIsLoadingSelector()(state as mainStateMap)).toEqual(true)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListIsLoadingSelector()(state as mainStateMap)).toEqual(false)
	})
})

describe("getDirectionsListErrorSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				error: "error"
			}
		}
		expect(getDirectionsListErrorSelector()(state as mainStateMap)).toEqual("error")
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListErrorSelector()(state as mainStateMap)).toEqual(undefined)
	})
})

describe("getDirectionsListDataSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			directionsList: {
				ids: ["1"],
				entities: { "1": { id: "1" } }
			}
		}
		expect(getDirectionsListDataSelector(state as mainStateMap)).toEqual([{ id: "1" }])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getDirectionsListDataSelector(state as mainStateMap)).toEqual([])
	})
})
