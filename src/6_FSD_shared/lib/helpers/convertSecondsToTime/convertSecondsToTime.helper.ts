import dayjs from "dayjs"

/**
 * Преобразует секунды в строку формата HH:MM
 * @param {number} value - секунды
 * @param {boolean} isUnix - true, если секунды формата unix.
 * @returns {string} - строка формата HH:MM
 */

export const convertSecondsToTime = (value: number, isUnix?: boolean): string => {
	if (isUnix) {
		const date = dayjs.unix(value)

		return date.format("HH:mm")
	}

	const hour = Math.trunc(value / (60 * 60))
	const minutes = Math.round((value % (60 * 60)) / 60)

	const hourString = hour < 10 ? `0${hour}` : hour
	const minutesString = minutes < 10 ? `0${minutes}` : minutes

	return `${hourString}:${minutesString}`
}
