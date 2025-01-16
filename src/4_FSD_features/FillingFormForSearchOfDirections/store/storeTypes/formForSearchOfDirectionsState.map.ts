import type { citiesDataForServerType, citiesDataTypeForFormType } from "@entities/City"
import type { directionFormParametres } from "@entities/Direction"

type formDataType = Omit<directionFormParametres, keyof citiesDataForServerType> &
	citiesDataTypeForFormType

export type formForSearchOfDirectionsStateMap = {
	isValidForm: boolean
	data?: formDataType
}
