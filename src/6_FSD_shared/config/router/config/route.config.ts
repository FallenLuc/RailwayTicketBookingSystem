import type { PagesNames } from "../constants/pagesNames.constant"
import type { RoutePaths } from "../constants/routePath.constant"

export type routeInfoType = {
	name: PagesNames
	path: RoutePaths
	inHeader: boolean
}

export const routeConfig: Record<PagesNames, routeInfoType> = {}
