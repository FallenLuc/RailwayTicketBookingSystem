import type { routeInfoType } from "@config/router/config/route.config"
import { routeConfig } from "@config/router/config/route.config"
import { type RouteProps } from "react-router"
import type { ReactNode } from "react"

import type { PagesNames } from "@config/router"

export type CustomRouteProps = routeInfoType & RouteProps

export const mapperPageNameComponent: Record<PagesNames, ReactNode> = {}

export const routerProviderConfig: CustomRouteProps[] = Object.entries(routeConfig).map(
	([routeName, routeInfo]) => {
		return {
			...routeInfo,
			element: mapperPageNameComponent[routeName as unknown as PagesNames]
		}
	}
)
