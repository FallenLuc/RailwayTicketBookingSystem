import { describe, expect, test } from "@jest/globals"
import { parseFormDataFromUrlHelper } from "./parseFormDataFromUrl.helper"

describe("parseFormDataFromUrlHelperTest", () => {
	test("only form data", () => {
		const searchParams = new URLSearchParams(
			"?from_city_id=66ac8b69cb563f0052174f45&to_city_id=66ac8b69cb563f0052174f46"
		)
		expect(parseFormDataFromUrlHelper(searchParams)).toEqual({
			formData: {
				fromCity: {
					_id: "66ac8b69cb563f0052174f45",
					name: ""
				},
				toCity: {
					_id: "66ac8b69cb563f0052174f46",
					name: ""
				}
			},
			displayData: {},
			additionalData: {}
		})
	})
	test("only display data", () => {
		const searchParams = new URLSearchParams("?limit=5&offset=10")
		expect(parseFormDataFromUrlHelper(searchParams)).toEqual({
			formData: {},
			displayData: {
				limit: 5,
				offset: 10
			},
			additionalData: {}
		})
	})

	test("both data", () => {
		const searchParams = new URLSearchParams(
			"?from_city_id=66ac8b69cb563f0052174f45&to_city_id=66ac8b69cb563f0052174f46&limit=5&offset=10"
		)
		expect(parseFormDataFromUrlHelper(searchParams)).toEqual({
			formData: {
				fromCity: {
					_id: "66ac8b69cb563f0052174f45",
					name: ""
				},
				toCity: {
					_id: "66ac8b69cb563f0052174f46",
					name: ""
				}
			},
			displayData: {
				limit: 5,
				offset: 10
			},
			additionalData: {}
		})
	})

	test("nothing data", () => {
		const searchParams = new URLSearchParams("?")

		expect(parseFormDataFromUrlHelper(searchParams)).toEqual({
			additionalData: {},
			displayData: {},
			formData: {}
		})
	})
})
