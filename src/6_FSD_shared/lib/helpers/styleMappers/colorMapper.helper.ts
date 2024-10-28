import type { appColorType } from "@customTypes/style.types"

export function colorMapper(color: appColorType) {
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
	}
}

// To Feature Тесты
