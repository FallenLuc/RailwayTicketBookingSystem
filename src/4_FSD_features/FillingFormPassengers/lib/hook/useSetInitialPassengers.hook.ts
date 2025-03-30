import {
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import type { directionDataType } from "@entities/Direction/types/directionData.type"
import { useEffect } from "react"
import { useFormPassengersActions } from "../../store/slices/formPassengers.slice"

export function useSetInitialPassengers(seatsInfo: number, currentDirection?: directionDataType) {
	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()

	const { initPassengers } = useFormPassengersActions()

	useEffect(() => {
		if (!isLoading && !error && currentDirection && __PROJECT__ !== "storybook") {
			initPassengers(seatsInfo)
		}
		//eslint-disable-next-line
	}, [isLoading, error, currentDirection?._id])
}
