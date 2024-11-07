import { describe, expect, test } from "@jest/globals"
import { whatIsDate } from "./whatIsDate.helper"

describe("whatIsDateHelperTest", () => {
	test("isWeekend", () => {
		expect(whatIsDate(new Date("2024-11-10T12:00:00.000"), 11)).toEqual({
			isPast: false,
			isWeekend: true,
			isLastDateCurrentMonth: false,
			isOtherMonth: false
		})
	})

	test("isLastDate", () => {
		expect(whatIsDate(new Date("2024-11-07T12:00:00.000"), 11)).toEqual({
			isWeekend: false,
			isLastDateCurrentMonth: true,
			isOtherMonth: false,
			isPast: true
		})
	})

	test("isOtherMonth Past", () => {
		expect(whatIsDate(new Date("2024-10-31T12:00:00.000"), 11)).toEqual({
			isWeekend: false,
			isLastDateCurrentMonth: false,
			isOtherMonth: true,
			isPast: true
		})
	})

	test("isOtherMonth Feature", () => {
		expect(whatIsDate(new Date("2024-12-01T12:00:00.000"), 11)).toEqual({
			isWeekend: true,
			isLastDateCurrentMonth: false,
			isOtherMonth: true,
			isPast: false
		})
	})
})
