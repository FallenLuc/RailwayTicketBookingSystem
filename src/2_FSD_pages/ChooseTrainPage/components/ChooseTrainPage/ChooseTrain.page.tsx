import {
	directionsListSliceReducers,
	fetchDirectionsThunk,
	useGetDirectionsListDataSelector,
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import type { asyncReducersList } from "@hooks/useAsyncReducer.hook"
import { useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { Header } from "@widgets/Header"
import { SearchDirections } from "@widgets/SearchDirections"
import { memo, useCallback, useEffect } from "react"

type ChooseTrainPageProps = {
	className?: string
}
const asyncReducer: asyncReducersList = {
	directionsList: directionsListSliceReducers
}
const ChooseTrainPage = memo<ChooseTrainPageProps>(props => {
	const { className } = props

	useAsyncReducer(asyncReducer)

	const dispatch = useAppDispatch()

	const data = useGetDirectionsListDataSelector()
	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	const onSearchHandler = useCallback(() => {
		if (formParametres) {
			dispatch(fetchDirectionsThunk(formParametres))
		}
	}, [dispatch, formParametres])

	useEffect(() => {
		onSearchHandler()
		//eslint-disable-next-line
	}, [])

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header typeBackground={"search"}>
				<SearchDirections
					view={"large"}
					onSearch={onSearchHandler}
				/>
			</Header>
			<div>
				{isLoading && "Loading..."}
				{error && "Error"}
				{!isLoading && !error ? data.map(dt => dt.toString()) : []}
			</div>
		</div>
	)
})

export default ChooseTrainPage
