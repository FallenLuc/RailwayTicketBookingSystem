import type { citiesDataForServerType, citiesDataTypeForFormType } from "@entities/City"
import type { directionDisplayParametres, directionFormParametres } from "@entities/Direction"

export type formDataType = Omit<directionFormParametres, keyof citiesDataForServerType> &
	citiesDataTypeForFormType

export type formForSearchOfDirectionsStateMap = {
	isValidForm: boolean
	data?: formDataType
	displayData: directionDisplayParametres
}
