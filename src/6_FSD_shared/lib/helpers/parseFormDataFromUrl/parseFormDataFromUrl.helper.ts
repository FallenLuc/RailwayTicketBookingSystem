import type { directionDisplayParametres } from "@entities/Direction"
import type { formDataType } from "@features/FillingFormForSearchOfDirections/store/storeTypes/formForSearchOfDirectionsState.map"

/**
 * Может распарсить строку типа URLSearchParams в три объекта
 * @returns {formData: formDataType; displayData: directionDisplayParametres; additionalData: T} - возвращаемый объект:
 * formData - объект с параметрами для поиска поездов.
 * displayData - объект с параметрами для отображения списка поездов.
 * additionalData - объект с остальными полями, которые получилось распарсить из url
 */

export function parseFormDataFromUrlHelper<T extends object>(
	searchParams?: URLSearchParams
): { formData: formDataType; displayData: directionDisplayParametres; additionalData: T } {
	let formData = {}
	let displayData = {}
	let additionalData: T = Object.create({})

	const fieldsDefaultFormData = [
		"date_start",
		"date_end",
		"date_start_arrival",
		"date_end_arrival",
		"have_first_class",
		"have_second_class",
		"have_third_class",
		"have_fourth_class",
		"have_wifi",
		"have_air_conditioning",
		"have_express",
		"price_from",
		"price_to",
		"start_departure_hour_from",
		"start_departure_hour_to",
		"start_arrival_hour_from",
		"start_arrival_hour_to",
		"end_departure_hour_from",
		"end_departure_hour_to",
		"end_arrival_hour_from",
		"end_arrival_hour_to"
	]

	searchParams?.forEach((value, key) => {
		let formParam = {}
		const keyCity = key === "from_city_id" ? "fromCity" : "toCity"

		switch (true) {
			case key === "from_city_id":
			case key === "to_city_id":
				formParam = {
					[keyCity]: {
						_id: value,
						name: ""
					}
				}

				formData = { ...formData, ...formParam }
				break
			case key === "limit":
			case key === "offset":
				formParam = {
					[key]: parseInt(value)
				}

				displayData = { ...displayData, ...formParam }
				break
			case fieldsDefaultFormData.includes(key):
				formParam = {
					[key]: value
				}

				formData = { ...formData, ...formParam }
				break
			default:
				formParam = {
					[key]: value
				}

				additionalData = { ...additionalData, ...formParam }
				break
		}
	})

	return { formData, displayData, additionalData }
}
