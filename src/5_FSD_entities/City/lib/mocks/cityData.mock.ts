import type { cityDataType } from "../../types/cityData.type"

type cityNamesType = "москва" | "санкт-петербург" | "московия"

export const cityDataMock = (cityName: cityNamesType = "москва"): cityDataType => {
	switch (cityName) {
		case "москва":
			return {
				_id: "66ac8b69cb563f0052174f45",
				name: "москва"
			}
		case "санкт-петербург":
			return {
				_id: "66ac8b69cb563f0052174f46",
				name: "санкт-петербург"
			}
		case "московия":
			return {
				_id: "66ac8b69cb563f0052174f46",
				name: "московия"
			}
	}
}
