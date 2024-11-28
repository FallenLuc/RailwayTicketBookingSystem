export const convertSecondsToTime = (value: number) => {
	const hour = Math.trunc(value / (60 * 60))
	const minutes = Math.round((value % (60 * 60)) / 60)

	const hourString = hour < 10 ? `0${hour}` : hour
	const minutesString = minutes < 10 ? `0${minutes}` : minutes

	return `${hourString}:${minutesString}`
}
