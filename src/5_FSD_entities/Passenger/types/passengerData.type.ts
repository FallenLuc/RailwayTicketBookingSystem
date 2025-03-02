import type { sexType } from "@customTypes/common.types"

export type passengerDataType = {
	id: string
	surname: string
	firstName: string
	lastName?: string
	sex: sexType
	dateBirth: string
	isLimitedMobility: boolean
	seriesPassport?: string
	numberPassport?: string
}
