import { describe, expect, test } from "@jest/globals"
import { colorMapper } from "./colorMapper.helper"

describe("colorMapperHelperTest", () => {
	test("colorMapper", () => {
		expect(colorMapper("accent-orange")).toBe("color-accent-orange")
		expect(colorMapper("gold")).toBe("color-gold")
		expect(colorMapper("light-gray")).toBe("color-light-gray")
		expect(colorMapper("main-gray")).toBe("color-main-gray")
		expect(colorMapper("main-dark")).toBe("color-main-dark")
		expect(colorMapper("main-light")).toBe("color-main-light")
	})
})
