import { describe, expect, test } from "@jest/globals"
import { fontSizeMapper, fontWeightMapper } from "./fontMapper.helper"

describe("fontMapperHelperTest", () => {
	test("fontsizeType", () => {
		expect(fontSizeMapper("xs")).toBe("font-xs")
		expect(fontSizeMapper("s")).toBe("font-s")
		expect(fontSizeMapper("m")).toBe("font-m")
		expect(fontSizeMapper("l")).toBe("font-l")
		expect(fontSizeMapper("xl")).toBe("font-xl")
	})

	test("fontWeightType", () => {
		expect(fontWeightMapper("think")).toBe("font-think")
		expect(fontWeightMapper("medium")).toBe("font-medium")
		expect(fontWeightMapper("fat")).toBe("font-fat")
		expect(fontWeightMapper("ultra-fat")).toBe("font-ultra-fat")
	})
})
