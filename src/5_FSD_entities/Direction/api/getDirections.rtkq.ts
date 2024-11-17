import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { RequestPaths } from "@api/constants/requestPath.constant"
import type {
	directionsGeneralDataType,
	directionsGeneralDataFromServerType
} from "../types/directionData.type"
import type {
	directionFormParametres,
	directionsDisplayParametres
} from "../types/directionFormParametres.type"
import { uid } from "uid"

const getDirectionsRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getDirections: build.query<
			directionsGeneralDataType[],
			directionFormParametres & directionsDisplayParametres
		>({
			query: parametres => {
				return {
					url: RequestPaths.Directions,
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
