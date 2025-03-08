import type { seatDataType } from "../../types/seatData.type"

export function seatsDataMock(count = 5): seatDataType[] {
	const seats = []
	for (let i = 0; i < count; i++) {
		const random = Math.random()
		let available = false

		if (random > 0.5) {
			available = true
		}

		seats.push({ index: i, available })
	}

	return seats
}
