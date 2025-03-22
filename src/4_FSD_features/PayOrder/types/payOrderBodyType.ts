import type { seatForPayType } from "@entities/Carriage"
import type { clientDataType } from "@entities/Client"

export type payOrderBodyType = {
	user: clientDataType
	departure: {
		route_direction_id: string
		seats: seatForPayType[]
	}
}
