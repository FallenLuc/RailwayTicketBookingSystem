import { type paramsType } from "@customTypes/common.types"
import { createQueryParams } from "../addQueryParams/addQueryParams.helper"

export function createLinkWithQueryParams<T extends string | number | boolean | undefined>(
	link: string,
	params: paramsType<T>
) {
	return `${link}${createQueryParams(params)}`
}
