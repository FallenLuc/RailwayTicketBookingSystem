/**
 * Преобразует часы в секунды
 * @param {number} value - количество часов
 * @returns {number} - количество секунд
 */

export const convertHourToSeconds = (value: number): number => {
	const seconds = value * 60 * 60

	return seconds
}
