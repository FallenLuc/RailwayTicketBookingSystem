import type { DeepPartial } from "@customTypes/global.types"
import { describe, expect, jest, test } from "@jest/globals"
import type { directionGeneralDataFromServerType } from "../../types/directionData.type"
import type { directionsListStateMap } from "../storeTypes/directionsListState.map"
import { fetchDirectionsThunk } from "../thunks/fetchDirections/fetchDirections.thunk"
import { directionsListSliceActions, directionsListSliceReducers } from "./directionsList.slice"

jest.mock("uid", () => ({
	uid: jest.fn().mockReturnValue("testID")
}))

describe("directionsListSliceTest", () => {
	test("directionsListInit init already", () => {
		const state: DeepPartial<directionsListStateMap> = {
			_inited: true
		}

		const { directionsListInit } = directionsListSliceActions

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			directionsListInit()
		)

		expect(newState).toEqual({
			_inited: true
		})
	})

	test("directionsListInit not init yet", () => {
		const state: DeepPartial<directionsListStateMap> = {
			_inited: false
		}

		const { directionsListInit } = directionsListSliceActions

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			directionsListInit()
		)

		expect(newState).toEqual({
			_inited: true
		})
	})

	test("pending", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: false,
			error: ""
		}

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.pending("", { from_city_id: "1", to_city_id: "2" })
		)

		expect(newState).toEqual({
			isLoading: true,
			error: undefined,
			ids: [],
			entities: {},
			totalCount: 0
		})
	})

	test("fulfilled", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: true,
			error: "error",
			ids: [],
			entities: {}
		}

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.fulfilled(
				{
					total_count: 156,
					items: [
						{ from_city_id: "1" }
					] as unknown as directionGeneralDataFromServerType[]
				},
				"",
				{
					from_city_id: "1",
					to_city_id: "2"
				}
			)
		)

		expect(newState).toEqual({
			isLoading: false,
			error: undefined,
			totalCount: 156,
			ids: ["testID"],
			entities: { testID: { from_city_id: "1", id: "testID" } }
		})
	})

	test("rejected", () => {
		const state: DeepPartial<directionsListStateMap> = {
			isLoading: true,
			error: undefined
		}

		const newState = directionsListSliceReducers(
			state as directionsListStateMap,
			fetchDirectionsThunk.rejected(
				null,
				"",
				{ from_city_id: "1", to_city_id: "2" },
				"error with request"
			)
		)

		expect(newState).toEqual({
			isLoading: false,
			error: "error with request",
			ids: [],
			entities: {},
			totalCount: 0
		})
	})
})
