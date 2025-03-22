import type { carriageDataType } from "@entities/Carriage"
import type { clientDataType } from "@entities/Client"
import type { passengerDataType } from "@entities/Passenger"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"
import type { payOrderBodyType } from "../../../types/payOrderBodyType"

// To Feature добавить обработку мест по номеру. Связано с созданием карты вагона

dayjs.extend(customParseFormat)

export function transformDataFormToPay(
	directionId: string,
	carriageInfo: carriageDataType,
	client: clientDataType,
	passengers: passengerDataType[]
): payOrderBodyType {
	const orderBody: Record<string, any> = {}

	orderBody.departure = {}

	orderBody.departure.route_direction_id = directionId
	orderBody.user = {
		first_name: client.firstName.value,
		last_name: client.surName.value,
		patronymic: client.lastName.value,
		phone: client.phoneNumber.value,
		email: client.email.value,
		payment_method: client.payMethod === "online" ? "online" : "cash"
	}

	orderBody.departure.seats = passengers.map((passenger, index) => {
		return {
			coach_id: carriageInfo._id,
			seat_number: index + 1,
			is_child: false,
			person_info: {
				is_adult: true,
				first_name: passenger.firstName.value,
				last_name: passenger.surname.value,
				patronymic: passenger.lastName.value,
				gender: passenger.sex === "male" ? true : false,
				birthday: dayjs(passenger.dateBirth.value, "DD.MM.YYYY").format("YYYY-MM-DD"),
				document_type: "паспорт",
				document_data: `${passenger.seriesPassport.value} ${passenger.numberPassport.value}`
			},
			include_children_seat: false
		}
	})

	return orderBody as payOrderBodyType
}
