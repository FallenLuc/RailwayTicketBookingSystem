import { describe, expect, test } from "@jest/globals"
import { validationEmail } from "./validationEmail.helper"

describe("validationEmailHelperTest", () => {
	test("error with passenger", () => {
		expect(validationEmail("dev.public")).toBe(false)
	})
	test("error without passenger", () => {
		expect(validationEmail("")).toBe(false)
	})
	test("success", () => {
		expect(validationEmail("dev.public@dnd-projects.ru")).toBe(true)
	})
})
