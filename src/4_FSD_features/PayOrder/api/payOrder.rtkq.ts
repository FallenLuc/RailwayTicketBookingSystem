import { rtkBaseApi } from "@api/instances/rtkBase.api"
import { getPayRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import type { carriageDataType } from "@entities/Carriage"
import type { clientDataType } from "@entities/Client"
import type { passengerDataType } from "@entities/Passenger"
import { transformDataFormToPay } from "../lib/helpers/transformDataFormToPay/transformDataFormToPay.helper"

const payOrderRtkq = rtkBaseApi.injectEndpoints({
	endpoints: build => ({
		toPay: build.mutation<
			{ status: true },
			{
				directionId: string
				carriageInfo: carriageDataType
				client: clientDataType
				passengers: passengerDataType[]
			}
		>({
			query: params => {
				const body = transformDataFormToPay(
					params.directionId,
					params.carriageInfo,
					params.client,
					params.passengers
				)

				return {
					url: getPayRequestPaths(),
					method: "POST",
					body: JSON.stringify(body)
				}
			}
		})
	})
})

export const { useToPayMutation } = payOrderRtkq
