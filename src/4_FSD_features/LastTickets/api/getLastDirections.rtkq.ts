import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getLastDirectionsRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import type {
	directionGeneralDataFromServerType,
	directionGeneralDataType
} from "@entities/Direction"
import { uid } from "uid"

const getLastDirectionsRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		getLastDirections: build.query<directionGeneralDataType[], void>({
			query: () => {
				return {
					url: getLastDirectionsRequestPaths(),
					params: {}
				}
			},
			transformResponse: (response: directionGeneralDataFromServerType[]) => {
				if (response?.length) {
					return response.map(item => ({ ...item, id: uid() }))
				}

				return []
			}
		})
	})
})

export const { useGetLastDirectionsQuery } = getLastDirectionsRtkq
