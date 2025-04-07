import type { appColorType } from "@customTypes/style.types"

/**
 * Служит для использования системы цветов. Возвращает название css класса, который соответствует переданному цвету.
 * @param {appColorType} color - цвет для которого нужен css класс
 * @returns {string} - название класса.
 */

export function colorMapper(color: appColorType): string {
	switch (color) {
		case "accent-orange":
			return "color-accent-orange"
		case "main-dark":
			return "color-main-dark"
		case "main-light":
			return "color-main-light"
		case "main-gray":
			return "color-main-gray"
		case "light-gray":
			return "color-light-gray"
		case "gold":
			return "color-gold"
		case "error":
			return "color-error"
	}
}
