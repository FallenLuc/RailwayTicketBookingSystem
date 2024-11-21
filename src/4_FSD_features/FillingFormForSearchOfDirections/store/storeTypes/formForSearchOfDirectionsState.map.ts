import type { directionFormParametres } from "@entities/Direction"
import type {
	citiesDataForServerType,
	citiesDataTypeForFormType
} from "../../types/formForSearch.type"

export type formForSearchOfDirectionsStateMap = {
	hasDepartureDirections: boolean
	isValidForm: boolean
	data?: Omit<directionFormParametres, keyof citiesDataForServerType> & citiesDataTypeForFormType
}
