import { getRouteTicket } from "@config/router"
import { useGetDirectionsListDataSelector } from "@entities/Direction"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useCurrentDirectionActions } from "@features/FillingCurrentDirection"
import { parseFormDataFromUrlHelper } from "@features/FillingFormForSearchOfDirections/lib/helpers/parseFormDataFromUrl/parseFormDataFromUrl.helper"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { fetchInitialDirectionListThunk } from "@widgets/DisplaySettingsDirectionsList"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useCallback, useEffect, useMemo } from "react"
import { useParams } from "react-router"
import { useSearchParams } from "react-router-dom"
import { PageContent } from "../PageContent/PageContent"

const TicketPage = TypedMemo(() => {
	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	const { id } = useParams<{ id: string }>()
	const pagePath = getRouteTicket(id || "")

	const { setCurrentDirection } = useCurrentDirectionActions()

	const { additionalData: dataIds } = parseFormDataFromUrlHelper<{
		toTripId: string
	}>(searchParams)

	const directions = useGetDirectionsListDataSelector()

	useInitialEffect(
		useCallback(() => {
			dispatch(fetchInitialDirectionListThunk(searchParams))
		}, [dispatch, searchParams])
	)

	useEffect(() => {
		if (directions?.length) {
			const currentDirection = directions.filter(
				direction => direction?.departure?._id === dataIds?.toTripId
			)?.[0]

			if (currentDirection) {
				setCurrentDirection(currentDirection)
			}
		}
	}, [dataIds?.toTripId, directions, setCurrentDirection])

	const pageContent = (
		<>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			></Header>
			<BreadcrumbsLine stage={"tickets"} />
			<ContainerLayout>
				<PageContent />
			</ContainerLayout>
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
