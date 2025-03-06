import { describe, expect, test } from "@jest/globals"
import { convertUnixToDate } from "./convertUnixToDate.helper"

describe("convertUnixToDateHelperTest", () => {
	test("1741281548", () => {
		expect(convertUnixToDate(1741281548)).toBe("06.03.2025")
	})
})
