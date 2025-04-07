/**
 * Преобразует секунды в целые часы.
 * @param {number} value - количество секунд
 * @returns {number} - целое количество часов.
 */

export const convertSecondsToHour = (value: number): number => {
	const hour = Math.trunc(value / (60 * 60))

	return hour
}
