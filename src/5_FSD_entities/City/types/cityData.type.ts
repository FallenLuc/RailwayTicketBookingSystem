export type citiesDataForServerType = {
	from_city_id?: string
	to_city_id?: string
}

export type cityDataType = {
	_id: string
	name: string
}

export type citiesDataTypeForFormType = {
	fromCity?: cityDataType
	toCity?: cityDataType
}
