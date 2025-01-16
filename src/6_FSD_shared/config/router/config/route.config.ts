import { RouteNames } from "../constants/routeNames.constant"
import { HashPaths, RoutePaths } from "../constants/routePaths.constant"

export type routeInfoType = {
	name: RouteNames
	path: RoutePaths | HashPaths
}

export const routeConfig: Record<RouteNames, routeInfoType> = {
	[RouteNames.Main]: {
		name: RouteNames.Main,
		path: RoutePaths.Main
	},
	[RouteNames.Header]: {
		name: RouteNames.Header,
		path: HashPaths.Header
	},
	[RouteNames.AboutUS]: {
		name: RouteNames.AboutUS,
		path: HashPaths.AboutUs
	},
	[RouteNames.HowItWorks]: {
		name: RouteNames.HowItWorks,
		path: HashPaths.HowItWorks
	},
	[RouteNames.Reviews]: {
		name: RouteNames.Reviews,
		path: HashPaths.Reviews
	},
	[RouteNames.Contacts]: {
		name: RouteNames.Contacts,
		path: HashPaths.Contacts
	},
	[RouteNames.ChooseTrain]: {
		name: RouteNames.ChooseTrain,
		path: RoutePaths.ChooseTrain
	},
	[RouteNames.Ticket]: {
		name: RouteNames.Ticket,
		path: RoutePaths.Ticket
	},
	[RouteNames.Success]: {
		name: RouteNames.Success,
		path: RoutePaths.Success
	},
	[RouteNames.NotFound]: {
		name: RouteNames.NotFound,
		path: RoutePaths.NotFound
	}
}
