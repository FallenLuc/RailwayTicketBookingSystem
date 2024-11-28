import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getDirectionsRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { uid } from "uid"
import type {
	directionsGeneralDataFromServerType,
	directionsGeneralDataType
} from "../types/directionData.type"
import type {
	directionFormParametres,
	directionsDisplayParametres
} from "../types/directionFormParametres.type"

const getDirectionsRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getDirections: build.query<
			directionsGeneralDataType[],
			directionFormParametres & directionsDisplayParametres
		>({
			query: parametres => {
				return {
					url: getDirectionsRequestPaths(),
					params: {
						...parametres
					}
				}
			},
			transformResponse: (response: {
				totalCount: number
				items: directionsGeneralDataFromServerType[]
			}) => response.items.map(item => ({ ...item, id: uid() }))
		})
	})
})

export const getDirections = getDirectionsRtkq.endpoints.getDirections.initiate
export const { useGetDirectionsQuery } = getDirectionsRtkq

// To Feature параметры сохранять в url  страницы
