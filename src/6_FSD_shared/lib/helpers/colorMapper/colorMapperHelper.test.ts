import { describe, expect, test } from "@jest/globals"
import { colorMapper, colorHoverMapper } from "./colorMapper.helper"

describe("colorMapperHelperTest", () => {
	test("colorMapper", () => {
		expect(colorMapper("accent-orange")).toBe("color-accent-orange")
		expect(colorMapper("gold")).toBe("color-gold")
		expect(colorMapper("light-gray")).toBe("color-light-gray")
		expect(colorMapper("main-gray")).toBe("color-main-gray")
		expect(colorMapper("main-dark")).toBe("color-main-dark")
		expect(colorMapper("main-light")).toBe("color-main-light")
	})

	test("colorHoverMapper", () => {
		expect(colorHoverMapper("accent-orange")).toBe("color-hover-accent-orange")
		expect(colorHoverMapper("gold")).toBe("color-hover-gold")
		expect(colorHoverMapper("light-gray")).toBe("color-hover-light-gray")
		expect(colorHoverMapper("main-gray")).toBe("color-hover-main-gray")
		expect(colorHoverMapper("main-dark")).toBe("color-hover-main-dark")
		expect(colorHoverMapper("main-light")).toBe("color-hover-main-light")
	})
})
