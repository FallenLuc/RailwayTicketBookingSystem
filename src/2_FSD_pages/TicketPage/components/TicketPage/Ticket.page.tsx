import { getRouteTicket } from "@config/router"
import { useGetDirectionsListItemSelector } from "@entities/Direction"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import {
	useCurrentDirectionActions,
	useGetCurrentDirectionInitedSelector
} from "@features/FillingFormCurrentDirection"
import { parseFormDataFromUrlHelper } from "@features/FillingFormForSearchOfDirections"
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
	const { id } = useParams<{ id: string }>()
	const pagePath = getRouteTicket(id || "")

	const dispatch = useAppDispatch()
	const [searchParams] = useSearchParams()

	const { setCurrentDirection, initCurrentDirection } = useCurrentDirectionActions()

	const { additionalData: dataIds } = parseFormDataFromUrlHelper<{
		directionId: string
	}>(searchParams)

	const currentDirection = useGetDirectionsListItemSelector(dataIds.directionId)
	const initedCurrentDirection = useGetCurrentDirectionInitedSelector()

	useInitialEffect(
		useCallback(() => {
			dispatch(fetchInitialDirectionListThunk({ searchParams, namePage: pagePath.route }))
		}, [dispatch, pagePath.route, searchParams])
	)

	useEffect(() => {
		if (currentDirection && !initedCurrentDirection) {
			initCurrentDirection(currentDirection)
		} else if (currentDirection) {
			setCurrentDirection(currentDirection)
		}

		//eslint-disable-next-line
	}, [currentDirection?.departure?._id])

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
