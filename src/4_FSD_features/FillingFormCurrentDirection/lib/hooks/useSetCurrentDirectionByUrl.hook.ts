import { useGetDirectionsListItemSelector } from "@entities/Direction"
import { parseFormDataFromUrlHelper } from "@helpers/parseFormDataFromUrl/parseFormDataFromUrl.helper"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { fetchInitialDirectionListThunk } from "@widgets/DisplaySettingsDirectionsList"
import { useCallback, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useGetCurrentDirectionInitedSelector } from "../../store/selectors/getCurrentDirectionProperties/getCurrentDirectionProperties.selector"
import { useCurrentDirectionActions } from "../../store/slices/currentDirection.slice"

export function useSetCurrentDirectionByUrl(pagePath: string) {
	const [searchParams] = useSearchParams()
	const dispatch = useAppDispatch()

	const { setCurrentDirection, initCurrentDirection, calculateSum } = useCurrentDirectionActions()

	const { additionalData: dataIds } = parseFormDataFromUrlHelper<{
		directionId: string
	}>(searchParams)

	const currentDirection = useGetDirectionsListItemSelector(dataIds.directionId)
	const initedCurrentDirection = useGetCurrentDirectionInitedSelector()

	useInitialEffect(
		useCallback(() => {
			dispatch(fetchInitialDirectionListThunk({ searchParams, namePage: pagePath }))
		}, [dispatch, pagePath, searchParams])
	)

	useEffect(() => {
		if (currentDirection && !initedCurrentDirection) {
			initCurrentDirection(currentDirection)
			calculateSum()
		} else if (currentDirection) {
			setCurrentDirection(currentDirection)
		}

		//eslint-disable-next-line
	}, [currentDirection?.departure?._id])
}
