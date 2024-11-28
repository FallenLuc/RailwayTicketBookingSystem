import { describe, expect, test } from "@jest/globals"
import { validationEmail } from "./validationEmail.helper"

describe("validationEmailHelperTest", () => {
	test("error with data", () => {
		expect(validationEmail("dev.public")).toBe(false)
	})
	test("error without data", () => {
		expect(validationEmail("")).toBe(false)
	})
	test("success", () => {
		expect(validationEmail("dev.public@dnd-projects.ru")).toBe(true)
	})
})
