import { SHOW_LIMITS } from "@constants/common.constant"
import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, test } from "@jest/globals"
import type { formForSearchOfDirectionsStateMap } from "../storeTypes/formForSearchOfDirectionsState.map"
import {
	formForSearchDirectionsActions,
	formForSearchDirectionsReducer
} from "./formForSearchOfDirections.slice"

describe("formForSearchOfDirectionsSliceTest", () => {
	test("setParametres", () => {
		const state: DeepPartial<formForSearchOfDirectionsStateMap> = {
			isValidForm: false,
			data: {
				toCity: {
					_id: "1",
					name: "testCity"
				},
				fromCity: {
					_id: "1",
					name: "testCity2"
				}
			}
		}

		const newState = formForSearchDirectionsReducer(
			state as formForSearchOfDirectionsStateMap,
			formForSearchDirectionsActions.setParametres({ date_start: "2024-12-30" })
		)

		expect(newState).toEqual({
			isValidForm: true,
			data: {
				toCity: {
					_id: "1",
					name: "testCity"
				},
				fromCity: {
					_id: "1",
					name: "testCity2"
				},
				date_start: "2024-12-30"
			}
		})
	})

	test("setDisplayParametresParametres", () => {
		const state: DeepPartial<formForSearchOfDirectionsStateMap> = {
			displayData: {
				limit: 10,
				offset: 6
			}
		}

		const newState = formForSearchDirectionsReducer(
			state as formForSearchOfDirectionsStateMap,
			formForSearchDirectionsActions.setDisplayParametres({ limit: 20 })
		)

		expect(newState).toEqual({
			displayData: {
				limit: 20,
				offset: 6
			}
		})
	})

	test("clearParametres", () => {
		const state: DeepPartial<formForSearchOfDirectionsStateMap> = {
			isValidForm: false,
			data: {
				toCity: {
					_id: "1",
					name: "testCity"
				},
				fromCity: {
					_id: "1",
					name: "testCity2"
				}
			}
		}

		const newState = formForSearchDirectionsReducer(
			state as formForSearchOfDirectionsStateMap,
			formForSearchDirectionsActions.clearParametres()
		)

		expect(newState).toEqual({
			isValidForm: false,
			data: undefined,
			displayData: {
				limit: SHOW_LIMITS[0],
				offset: 1
			}
		})
	})

	test("changeDirection", () => {
		const state: DeepPartial<formForSearchOfDirectionsStateMap> = {
			isValidForm: false,
			data: {
				toCity: {
					_id: "1",
					name: "testCity"
				},
				fromCity: {
					_id: "2",
					name: "testCity2"
				}
			}
		}

		const newState = formForSearchDirectionsReducer(
			state as formForSearchOfDirectionsStateMap,
			formForSearchDirectionsActions.changeDirection()
		)

		expect(newState).toEqual({
			isValidForm: false,
			data: {
				toCity: {
					_id: "2",
					name: "testCity2"
				},
				fromCity: {
					_id: "1",
					name: "testCity"
				}
			}
		})
	})
})
