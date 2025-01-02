import type { EntityState } from "@reduxjs/toolkit"
import { uid } from "uid"
import type { directionGeneralDataType } from "../../types/directionData.type"
import { directionGeneralDataMock } from "./directionGeneralData.mock"

type mockResultType = {
	directions: directionGeneralDataType[]
	entityAdapter: EntityState<directionGeneralDataType, string>
}

export const directionsListDataMock = (count = 5, isArrival = false): mockResultType => {
	const array = new Array(count).fill(1)

	const directions = array.map(() =>
		directionGeneralDataMock({ id: uid() }, undefined, undefined, { arrival: isArrival })
	)

	type resultType<ID extends string, T> = {
		ids: ID[]
		entities: Record<ID, T>
	}
	const result: resultType<string, directionGeneralDataType> = {
		ids: [],
		entities: {}
	}

	directions.forEach(item => {
		result.ids.push(item.id)

		result.entities[item.id] = item
	})

	return {
		directions: directions,
		entityAdapter: result
	}
}
