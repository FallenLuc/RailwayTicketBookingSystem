import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getDirectionsRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import type { directionsDataFromServerType } from "../types/directionData.type"
import type {
	directionDisplayParametres,
	directionFormParametres
} from "../types/directionFormParametres.type"

const getDirectionsRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getDirections: build.query<
			directionsDataFromServerType,
			directionFormParametres & directionDisplayParametres
		>({
			query: parametres => {
				return {
					url: getDirectionsRequestPaths(),
					params: {
						...parametres
					}
				}
			}
		})
	})
})

export const getDirections = getDirectionsRtkq.endpoints.getDirections.initiate
export const { useGetDirectionsQuery } = getDirectionsRtkq
