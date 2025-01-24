import { getRouteTicket } from "@config/router"
import { useGetDirectionsListDataSelector } from "@entities/Direction"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import {
	useCurrentDirectionActions,
	useGetCurrentDirectionFromTripSelector,
	useGetCurrentDirectionToTripSelector
} from "@features/FillingCurrentDirection"
import { parseFormDataFromUrlHelper } from "@features/FillingFormForSearchOfDirections/lib/helpers/parseFormDataFromUrl/parseFormDataFromUrl.helper"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { fetchInitialDirectionListThunk } from "@widgets/DisplaySettingsDirectionsList"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useCallback, useEffect, useMemo } from "react"
import { useParams } from "react-router"
import { useSearchParams } from "react-router-dom"

const TicketPage = TypedMemo(() => {
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	const { id } = useParams<{ id: string }>()
	const pagePath = getRouteTicket(id || "")

	const { setCurrentDirection } = useCurrentDirectionActions()
	//eslint-disable-next-line
	const [A, B, dataIds] = parseFormDataFromUrlHelper<{ toTripId: string; fromTripId: string }>(
		searchParams
	)

	const directions = useGetDirectionsListDataSelector()
	const currentDirectionToTrip = useGetCurrentDirectionToTripSelector()
	const currentDirectionFromTrip = useGetCurrentDirectionFromTripSelector()

	useInitialEffect(
		useCallback(() => {
			dispatch(fetchInitialDirectionListThunk(searchParams))
		}, [dispatch, searchParams])
	)

	// Todo навести порядок
	// To fix уходит запрос после переключения страницы, хотя не должен. Можно из стейта брать. проверить логику сохранения текущего directions

	useEffect(() => {
		if (directions?.length) {
			const currentDirection = directions.filter(
				direction =>
					direction?.departure?._id === dataIds?.toTripId &&
					direction?.arrival?._id === dataIds?.fromTripId
			)?.[0]

			if (currentDirection) {
				setCurrentDirection(currentDirection)
			}
		}
	}, [dataIds?.fromTripId, dataIds?.toTripId, directions, setCurrentDirection])

	let content = <></>

	if (currentDirectionToTrip) {
		content = (
			<>
				<Text title={currentDirectionToTrip.from.city.name} />
				<Text title={currentDirectionToTrip.to.city.name} />
			</>
		)
	}

	if (currentDirectionFromTrip) {
		content = (
			<>
				<Text title={currentDirectionFromTrip.from.city.name} />
				<Text title={currentDirectionFromTrip.to.city.name} />
			</>
		)
	}

	const pageContent = (
		<>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			></Header>
			<BreadcrumbsLine stage={"tickets"} />
			<VStack>
				<ContainerLayout>{content}</ContainerLayout>
			</VStack>
		</>
	)

	const footer = useMemo(() => <Footer pagePath={pagePath.route} />, [pagePath.route])

	return (
		<Page
			content={pageContent}
			footer={footer}
		/>
	)
})

export default TicketPage
