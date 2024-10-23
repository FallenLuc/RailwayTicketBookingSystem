import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const rtkBaseApi = createApi({
	reducerPath: "rtkBaseApi",
	baseQuery: fetchBaseQuery({
		baseUrl: __API_URL__
	}),
	endpoints: () => ({})
})
