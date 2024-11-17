import { memo, useCallback } from "react"
import { CompactView } from "./view/CompactView/CompactView"
import { LargeView } from "./view/LargeView/LargeView"
import {
	useFormForSearchDirectionsActions,
	useGetFormForSearchOfDirectionsDataSelector,
	useGetFormForSearchOfDirectionsIsValidFormSelector
} from "@features/FillingFormForSearchOfDirections"
import { useNavigate } from "react-router-dom"
import { getRouteChooseTrain } from "@config/router"

type SearchOfTrainsProps = {
	className?: string
	view?: "compact" | "large" | "full"
}

export const SearchDirections = memo<SearchOfTrainsProps>(props => {
	const { className, view = "compact" } = props

	const { setParametres } = useFormForSearchDirectionsActions()
	const formParametres = useGetFormForSearchOfDirectionsDataSelector()
	const isValidForm = useGetFormForSearchOfDirectionsIsValidFormSelector()
	const navigate = useNavigate()

	const onInputLocationFromHandler = useCallback(
		(value: string) => {
			console.log(value)
			setParametres({ from_city_id: "66ac8b69cb563f0052174f45" })
		},
		[setParametres]
	)

	const onInputLocationToHandler = useCallback(
		(value: string) => {
			console.log(value)
			setParametres({ to_city_id: "66ac8b69cb563f0052174f46" })
		},
		[setParametres]
	)

	const onInputDateFromHandler = useCallback(
		(value: string) => {
			setParametres({ date_start: value })
		},
		[setParametres]
	)

	const onInputDateToHandler = useCallback(
		(value: string) => {
			setParametres({ date_end: value })
		},
		[setParametres]
	)

	const onClickHandler = useCallback(() => {
		if (isValidForm && formParametres) {
			navigate(getRouteChooseTrain().route)
		} else {
			console.log("не заполнена форма") // To Feature обработть ошибку заполнения формы
		}
	}, [formParametres, isValidForm, navigate])

	if (view === "compact") {
		return (
			<CompactView
				className={className}
				onInputLocationFromHandler={onInputLocationFromHandler}
				onInputLocationToHandler={onInputLocationToHandler}
				onInputDateFromHandler={onInputDateFromHandler}
				onInputDateToHandler={onInputDateToHandler}
				onClickHandler={onClickHandler}
				parametres={formParametres}
			/>
		)
	}

	if (view === "large") {
		return (
			<LargeView
				onInputLocationFromHandler={onInputLocationFromHandler}
				onInputLocationToHandler={onInputLocationToHandler}
				onInputDateFromHandler={onInputDateFromHandler}
				onInputDateToHandler={onInputDateToHandler}
				onClickHandler={onClickHandler}
				parametres={formParametres}
			/>
		)
	}
})
