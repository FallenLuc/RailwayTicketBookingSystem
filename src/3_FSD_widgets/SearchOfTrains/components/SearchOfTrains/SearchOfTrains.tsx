import { memo, useCallback } from "react"
import { SearchOfTrainsCompact } from "./view/SearchOfTrainsCompact/SearchOfTrainsCompact"
import { SearchOfTrainsFull } from "./view/SearchOfTrainsFull/SearchOfTrainsFull"

type SearchOfTrainsProps = {
	className?: string
	view?: "compact" | "full"
}

export const SearchOfTrains = memo<SearchOfTrainsProps>(props => {
	const { className, view = "compact" } = props

	const onInputLocationFromHandler = useCallback((value: string) => {
		console.log(value)
	}, [])

	const onInputLocationToHandler = useCallback((value: string) => {
		console.log(value)
	}, [])

	const onInputDateFromHandler = useCallback((value: string) => {
		console.log(value)
	}, [])

	const onInputDateToHandler = useCallback((value: string) => {
		console.log(value)
	}, [])

	const onClickHandler = useCallback(() => {
		console.log("submit")
	}, [])

	if (view === "compact") {
		return (
			<SearchOfTrainsCompact
				className={className}
				onInputLocationFromHandler={onInputLocationFromHandler}
				onInputLocationToHandler={onInputLocationToHandler}
				onInputDateFromHandler={onInputDateFromHandler}
				onInputDateToHandler={onInputDateToHandler}
				onClickHandler={onClickHandler}
			/>
		)
	}

	return (
		<SearchOfTrainsFull
			onInputLocationFromHandler={onInputLocationFromHandler}
			onInputLocationToHandler={onInputLocationToHandler}
			onInputDateFromHandler={onInputDateFromHandler}
			onInputDateToHandler={onInputDateToHandler}
			onClickHandler={onClickHandler}
		/>
	)
})
