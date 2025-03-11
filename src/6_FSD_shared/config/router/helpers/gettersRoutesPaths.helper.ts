import { HashPaths, RoutePaths } from "../constants/routePaths.constant"

export const getRouteMain = () => {
	return { route: RoutePaths.Main }
}
export const getRouteHeader = (pagePath: string) => {
	return {
		route: `${pagePath == "/" ? "" : pagePath}${HashPaths.Header}`,
		hash: `${HashPaths.Header.replace(/.*\/#/gm, "")}`
	}
}
export const getRouteAboutUs = () => {
	return { route: HashPaths.AboutUs, hash: HashPaths.AboutUs.replace(/.*\/#/gm, "") }
}
export const getRouteHowItWorks = () => {
	return {
		route: HashPaths.HowItWorks,
		hash: HashPaths.HowItWorks.replace(/.*\/#/gm, "")
	}
}
export const getRouteReviews = () => {
	return { route: HashPaths.Reviews, hash: HashPaths.Reviews.replace(/.*\/#/gm, "") }
}
export const getRouteContacts = () => {
	return {
		route: HashPaths.Contacts,
		hash: HashPaths.Contacts.replace(/.*\/#/gm, "")
	}
}
export const getRouteChooseTrain = () => {
	return { route: RoutePaths.ChooseTrain }
}
export const getRouteSuccess = () => {
	return { route: RoutePaths.Success }
}
export const getRouteTicket = (id: string) => {
	return { route: RoutePaths.Ticket.replace(/:id/, id) }
}

export const getRoutePassengers = () => {
	return { route: RoutePaths.Passengers }
}
