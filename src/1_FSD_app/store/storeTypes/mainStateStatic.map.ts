import type { rtkBaseApi } from "@api/instances/rtkBase.api"

export type mainStateStaticMap = {
	[rtkBaseApi.reducerPath]: ReturnType<typeof rtkBaseApi.reducer>
}
