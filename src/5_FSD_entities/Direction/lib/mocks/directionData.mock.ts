import { stationDataMock } from "../../../Station"
import { trainDataMock } from "../../../Train"
import type { directionDataType } from "../../types/directionData.type"

export const directionDataMock = (params?: Partial<directionDataType>): directionDataType => {
	return {
		_id: params?._id || "66ac8b84cb563f0052176a18",
		have_first_class: params?.have_first_class || false,
		have_second_class: params?.have_second_class || true,
		have_third_class: params?.have_third_class || true,
		have_fourth_class: params?.have_fourth_class || false,
		have_wifi: params?.have_wifi || true,
		have_air_conditioning: params?.have_air_conditioning || true,
		is_express: params?.is_express || true,
		min_price: params?.min_price || 2024,
		duration: params?.duration || 22254,
		available_seats: params?.available_seats || 112,
		available_seats_info: params?.available_seats_info || {
			second: 32,
			third: 96,
			fourth: 48,
			first: 34
		},
		train: params?.train || trainDataMock(),
		from: params?.from || stationDataMock(undefined, "start"),
		to: params?.to || stationDataMock(undefined, "end"),
		price_info: params?.price_info || {
			second: {
				top_price: 2652,
				bottom_price: 2214
			},
			third: {
				top_price: 3455,
				bottom_price: 2525,
				side_price: 3855
			},
			first: {
				top_price: 3455,
				bottom_price: 2400,
				side_price: 3855
			},
			fourth: {
				top_price: 3455,
				bottom_price: 1400,
				side_price: 3855
			}
		}
	}
}
