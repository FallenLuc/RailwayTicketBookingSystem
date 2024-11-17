import type { directionFormParametres } from "@entities/Direction"

export type formForSearchOfDirectionsStateMap = {
	hasDepartureDirections: boolean
	isValidForm: boolean
	data?: directionFormParametres
}
