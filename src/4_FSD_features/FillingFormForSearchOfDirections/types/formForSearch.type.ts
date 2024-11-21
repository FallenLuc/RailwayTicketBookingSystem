import type { cityDataType } from "@entities/City"

export type citiesDataForServerType = {
	from_city_id?: cityDataType["id"]
	to_city_id?: cityDataType["id"]
}

export type citiesDataTypeForFormType = {
	fromCity?: cityDataType
	toCity?: cityDataType
}
