import { RequestPaths } from "../constants/requestPath.constant"

export const getSubscribeRequestPaths = (value: string) =>
	`${RequestPaths.Subscribe}?email=${value}`
