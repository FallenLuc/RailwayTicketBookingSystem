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

/**
 * Обновляет адрес страницы, добавляя поля переданного объекта в качестве url параметров.
 * @param {paramsType<T>} params - объект поля которого станут url парамeтрами
 * @param {string} link - базовая ссылка
 */

export function addQueryParams<T extends string | number | boolean | undefined>(
	params?: paramsType<T>,
	link?: string
) {
	window.history.pushState({}, "", `#${link || "/"}${createQueryParams(params)}`)
}
