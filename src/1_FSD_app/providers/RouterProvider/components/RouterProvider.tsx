import { memo, Suspense, useMemo } from "react"
import { Route } from "react-router"
import { Routes } from "react-router-dom"
import { routerProviderConfig } from "../config/routerProvider.config"
import { PageLoader } from "@widgets/PageLoader"

export const RouterProvider = memo(() => {
	const fallbackPage = useMemo(() => <PageLoader />, [])
	return (
		<Suspense fallback={fallbackPage}>
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
