import { memo, Suspense } from "react"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { routerProviderConfig } from "../config/routerProvider.config"

export const RouterProvider = memo(() => {
	return (
		<Suspense fallback={""}>
			<Routes>
				{routerProviderConfig.map(pageInfo => {
					return (
						<Route
							key={pageInfo.path}
							path={pageInfo.path}
							element={pageInfo.element}
						/>
					)
				})}
			</Routes>
		</Suspense>
	)
})
