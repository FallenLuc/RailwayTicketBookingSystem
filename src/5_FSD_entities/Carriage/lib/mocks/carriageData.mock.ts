import type { DeepPartial } from "@customTypes/global.types"
import { uid } from "uid"
import type { carriageDataFromServerType, carriageDataType } from "../../types/carrriageData.type"
import { seatsDataMock } from "./seatsData.mock"

export function carriageDataMock(data?: DeepPartial<carriageDataType>): carriageDataType {
	return {
		_id: data?._id || uid(),
		class_type: data?.class_type || "second",
		bottom_price: data?.bottom_price ?? 2000,
		have_air_conditioning: data?.have_air_conditioning ?? true,
		have_wifi: data?.have_wifi ?? true,
		is_linens_included: data?.is_linens_included ?? true,
		name: data?.name || "ОБИ-81",
		price: data?.price || 2500,
		linens_price: data?.linens_price || 300,
		side_price: data?.side_price || 1500,
		train: data?.train || "Train Name",
		wifi_price: data?.wifi_price || 400,
		top_price: data?.top_price || 2600,
		available_seats: data?.available_seats ?? 4
	}
}

export function carriageDataFromServerMock(
	data?: DeepPartial<carriageDataType>,
	countSeats = 5
): carriageDataFromServerType {
	return {
		coach: carriageDataMock(data),
		seats: seatsDataMock(countSeats)
	}
}
