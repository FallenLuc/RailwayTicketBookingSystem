import type { DeepPartial } from "@customTypes/global.types"
import { uid } from "uid"
import type { passengerDataType } from "../../types/passengerData.type"

export const passengerDataMock = (
	passenger?: DeepPartial<passengerDataType>
): passengerDataType => {
	return {
		id: passenger?.id || uid(),
		surname: passenger?.surname || "Meridian",
		firstName: passenger?.firstName || "Lucifer",
		lastName: passenger?.lastName || "",
		dateBirth: passenger?.dateBirth || "21.06.1998",
		sex: passenger?.sex || "male",
		isLimitedMobility: passenger?.isLimitedMobility ?? false,
		numberPassport: passenger?.numberPassport ?? "015016",
		seriesPassport: passenger?.seriesPassport ?? "4619"
	}
}
