import dayjs from "dayjs"

export function convertUnixToDate(value: number) {
	const date = dayjs.unix(value)

	return date.format("DD.MM.YYYY")
}
