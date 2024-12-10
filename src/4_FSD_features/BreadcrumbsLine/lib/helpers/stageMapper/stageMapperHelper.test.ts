import { describe, expect, test } from "@jest/globals"
import { stageMapper } from "./stageMapper.helper"

describe("stageMapperHelperTest", () => {
	test("passenger", () => {
		expect(stageMapper("passengers")).toEqual({ number: 2, name: "Пассажиры" })
	})
})
