import { carriageDataMock } from "@entities/Carriage/lib/mocks/carriageData.mock"
import { clientDataMock } from "@entities/Client/lib/mocks/cliendData.mock"
import { passengerListDataMock } from "@entities/Passenger"
import { describe, expect, test } from "@jest/globals"
import { transformDataFormToPay } from "./transformDataFormToPay.helper"

describe("transformDataFormToPayHelperTest", () => {
	test("default", () => {
		const directionId = "123"
		const carriageInfo = carriageDataMock({ _id: "1234" })
		const client = clientDataMock()
		const passengers = passengerListDataMock(1)

		expect(transformDataFormToPay(directionId, carriageInfo, client, passengers)).toEqual({
			user: {
				first_name: client.firstName.value,
				last_name: client.surName.value,
				patronymic: client.lastName.value,
				phone: client.phoneNumber.value,
				email: client.email.value,
				payment_method: client.payMethod === "online" ? "online" : "cash"
			},
			departure: {
				route_direction_id: "123",
				seats: [
					{
						coach_id: "1234",
						seat_number: 1,
						is_child: false,
						include_children_seat: false,
						person_info: {
							is_adult: true,
							first_name: "Люцифер",
							last_name: "Меридиан",
							patronymic: "",
							gender: true,
							birthday: "1998-06-21",
							document_type: "паспорт",
							document_data: "4619 015016"
						}
					}
				]
			}
		})
	})
})
