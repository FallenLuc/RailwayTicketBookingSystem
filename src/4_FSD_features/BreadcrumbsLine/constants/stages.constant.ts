import type { stageType } from "../types/stageType.type"

export const stages: Record<stageType, string> = {
	tickets: "Билеты",
	passengers: "Пассажиры",
	payment: "Оплата",
	check: "Проверка"
}
