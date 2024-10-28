import type { fontSizeType, fontWeightType } from "@customTypes/style.types"

export function fontSizeMapper(size: fontSizeType) {
	switch (size) {
		case "xs":
			return "font-xs"
		case "s":
			return "font-s"
		case "m":
			return "font-m"
		case "l":
			return "font-l"
		case "xl":
			return "font-xl"
	}
}

export function fontWeightMapper(size: fontWeightType) {
	switch (size) {
		case "think":
			return "font-think"
		case "medium":
			return "font-medium"
		case "fat":
			return "font-fat"
		case "ultra-fat":
			return "font-ultra-fat"
	}
}

// To Feature Тесты
