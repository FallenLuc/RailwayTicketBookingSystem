import type { paramsType } from "@customTypes/common.types"

export function createQueryParams<T extends string | number | boolean | undefined | null>(
	params?: paramsType<T>
) {
	const searchParams = new URLSearchParams()

	if (!params) return undefined

	Object.entries(params).forEach(([paramName, paramValue]) => {
		if (paramValue !== undefined && paramValue !== null) {
			searchParams.set(paramName, paramValue.toString())
		}
	})

	return `?${searchParams}`
}

export function addQueryParams<T extends string | number | boolean | undefined>(
	params?: paramsType<T>,
	namePage?: string
) {
	window.history.pushState({}, "", `#${namePage || "/"}${createQueryParams(params)}`)
}
