import type { directionsListStateMap } from "@entities/Direction"

export type mainStateAsyncMap = {
	directionsList?: directionsListStateMap
}

export type mainStateAsyncKeys = keyof mainStateAsyncMap
