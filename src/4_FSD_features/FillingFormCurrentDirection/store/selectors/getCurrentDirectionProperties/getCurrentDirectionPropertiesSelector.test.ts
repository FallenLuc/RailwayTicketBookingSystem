import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import {
	getCurrentDirectionCarriageInfoSelector,
	getCurrentDirectionInfoSelector,
	getCurrentDirectionPassengersSelector,
	getCurrentDirectionSeatsInfoSelector,
	getCurrentDirectionSumSelector
} from "./getCurrentDirectionProperties.selector"

describe("getCurrentDirectionInfoSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				directionInfo: {
					_id: "1"
				}
			}
		}
		expect(getCurrentDirectionInfoSelector()(state as mainStateMap)).toEqual({
			_id: "1"
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionInfoSelector()(state as mainStateMap)).toEqual(undefined)
	})
})

describe("getCurrentDirectionCarriageInfoSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				carriageInfo: {
					_id: "1"
				}
			}
		}
		expect(getCurrentDirectionCarriageInfoSelector()(state as mainStateMap)).toEqual({
			_id: "1"
		})
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionCarriageInfoSelector()(state as mainStateMap)).toEqual(undefined)
	})
})

describe("getCurrentDirectionSeatsInfoSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				seatsInfo: 25
			}
		}
		expect(getCurrentDirectionSeatsInfoSelector()(state as mainStateMap)).toBe(25)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionSeatsInfoSelector()(state as mainStateMap)).toBe(1)
	})
})

describe("getCurrentDirectionSumSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				sum: 25
			}
		}
		expect(getCurrentDirectionSumSelector()(state as mainStateMap)).toBe(25)
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionSumSelector()(state as mainStateMap)).toBe(0)
	})
})

describe("getCurrentDirectionPassengersSelector", () => {
	test("get state", () => {
		const state: DeepPartial<mainStateMap> = {
			currentDirection: {
				passengers: {
					ids: ["1", "2"],
					entities: {
						"1": {
							id: "1",
							firstName: "Luc"
						},
						"2": {
							id: "2",
							firstName: "Lucifer"
						}
					}
				}
			}
		}
		expect(getCurrentDirectionPassengersSelector(state as mainStateMap)).toEqual([
			{ id: "1", firstName: "Luc" },
			{ id: "2", firstName: "Lucifer" }
		])
	})

	test("get withOut state", () => {
		const state: DeepPartial<mainStateMap> = {}
		expect(getCurrentDirectionPassengersSelector(state as mainStateMap)).toEqual([])
	})
})
