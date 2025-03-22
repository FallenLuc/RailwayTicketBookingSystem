import type { passengerDataForPayType } from "../../Passenger"

export type seatDataType = {
	index: number
	available: boolean
}

export type seatForPayType = {
	coach_id: string
	person_info: passengerDataForPayType
	seat_number: number
	is_child: false //нужно для запроса, не используется в логике
	include_children_seat: false //нужно для запроса, не используется в логике
}
