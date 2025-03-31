import dayjs from "dayjs"

/**
 * Преобразует unix число в дату формата "DD.MM.YYYY"
 * @param {number} value - дата в формате unix
 * @returns {string} - дата формата "DD.MM.YYYY"
 */

export function convertUnixToDate(value: number): string {
	const date = dayjs.unix(value)

	return date.format("DD.MM.YYYY")
}
