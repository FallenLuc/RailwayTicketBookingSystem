import { RequestPaths } from "../constants/requestPath.constant"

export const getSubscribeRequestPaths = (value: string) =>
	`${RequestPaths.Subscribe}?email=${value}`

export const getDirectionsRequestPaths = () => RequestPaths.Directions

export const getCitiesRequestPaths = (value: string) => `${RequestPaths.Cities}?name=${value}`

export const getLastDirectionsRequestPaths = () => RequestPaths.LastDirections

export const getPayRequestPaths = () => RequestPaths.Pay

export const getCarriageInfoRequestPaths = (id = "") => RequestPaths.Carriage.replace(":id", id)
