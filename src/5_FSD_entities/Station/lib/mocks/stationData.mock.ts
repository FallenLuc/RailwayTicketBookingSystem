import { cityDataMock } from "../../../City"
import type { stationDataType } from "../../types/stationData.type"

export const stationDataMock = (
	params?: Partial<stationDataType>,
	stationType: "start" | "end" = "start"
): stationDataType => {
	if (stationType === "start") {
		return {
			railway_station_name: params?.railway_station_name || "Киевский",
			city: params?.city || cityDataMock("москва"),
			datetime: params?.datetime || 1672949001
		}
	}

	return {
		railway_station_name: params?.railway_station_name || "Московский",
		city: params?.city || cityDataMock("санкт-петербург"),
		datetime: params?.datetime || 1673203341
	}
}
