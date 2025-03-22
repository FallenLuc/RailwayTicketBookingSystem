import { uid } from "uid"
import type { passengerDataType } from "../../types/passengerData.type"

export const passengerDataMock = (passenger?: Partial<passengerDataType>): passengerDataType => {
	return {
		id: passenger?.id || uid(),
		surname: passenger?.surname || { isValid: true, value: "Меридиан" },
		firstName: passenger?.firstName || { isValid: true, value: "Люцифер" },
		lastName: passenger?.lastName || { isValid: true, value: "" },
		dateBirth: passenger?.dateBirth || { isValid: true, value: "21.06.1998" },
		sex: passenger?.sex || "male",
		isLimitedMobility: passenger?.isLimitedMobility ?? false,
		numberPassport: passenger?.numberPassport || { isValid: true, value: "015016" },
		seriesPassport: passenger?.seriesPassport ?? { isValid: true, value: "4619" }
	}
}
