import { type paramsType } from "@customTypes/common.types"
import { createQueryParams } from "../addQueryParams/addQueryParams.helper"

/**
 * @param {string} link - ссылка "https:link/"
 * @param params - объект для конвертации в url параметры.
 * @returns {string} - Формирует ссылку из основной ссылки и параметров, полученных из объекта.
 */

export function createLinkWithQueryParams<T extends string | number | boolean | undefined>(
	link: string,
	params: paramsType<T>
): string {
	return `${link}${createQueryParams(params)}`
}
