import { uid } from "uid"
import type { passengerDataType } from "../../types/passengerData.type"
import { passengerDataMock } from "./passengerData.mock"

export const passengerListDataMock = (count = 1): passengerDataType[] => {
	const array = new Array(count).fill(1)

	const passengers: passengerDataType[] = []

	array.forEach(() => {
		passengers.push(passengerDataMock({ id: uid() }))
	})

	return passengers
}
