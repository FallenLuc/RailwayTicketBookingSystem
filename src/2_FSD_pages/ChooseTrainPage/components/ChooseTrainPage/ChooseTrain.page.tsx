import { memo, useEffect } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { SearchDirections } from "@widgets/SearchDirections"
import {
	useGetDirectionsListDataSelector,
	useGetDirectionsListIsLoadingSelector,
	useGetDirectionsListErrorSelector
} from "@entities/Direction/store/selectors/getDirectionsListProperties/getDirectionsListProperties.selector"
import type { asyncReducersList } from "@hooks/useAsyncReducer.hook"
import { useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { directionsListSliceReducers } from "@entities/Direction/store/slices/directionsList..slice"
import { fetchDirectionsThunk } from "@entities/Direction"
import { useGetFormForSearchOfDirectionsDataSelector } from "@features/FillingFormForSearchOfDirections"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"

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
	const formParametres = useGetFormForSearchOfDirectionsDataSelector()

	useEffect(() => {
		if (formParametres) {
			dispatch(fetchDirectionsThunk(formParametres))
		}
		//eslint-disable-next-line
	}, [dispatch])

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header typeBackground={"search"}>
				<SearchDirections view={"large"} />
			</Header>
			<div>
				{isLoading && "Loading..."}
				{error && "Error"}
				{data.map(dt => dt.toString())}
			</div>
		</div>
	)
})

export default ChooseTrainPage
