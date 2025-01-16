import { uid } from "uid"
import type { trainDataType } from "../../types/trainData.type"

export const trainDataMock = (params?: Partial<trainDataType>): trainDataType => {
	return {
		_id: params?._id || uid(),
		name: params?.name || "Перун - 100"
	}
}
