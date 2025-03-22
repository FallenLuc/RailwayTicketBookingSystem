import { getRouteChooseTrain, getRoutePassengers, getRouteTicket } from "@config/router"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useSetCurrentDirectionByUrl } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { DirectionDetails } from "@widgets/DirectionDetails"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { PageContent } from "@widgets/PageContent"
import { useCallback } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router-dom"

const TicketPage = TypedMemo(() => {
	const { id } = useParams<{ id: string }>()
	const pagePath = getRouteTicket(id || "")

	useSetCurrentDirectionByUrl(pagePath.route)

	const navigate = useNavigate()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	const onBackHandler = useCallback(() => {
		navigate(createQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	return (
		<Page>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			></Header>
			<BreadcrumbsLine stage={"tickets"} />
			<ContainerLayout>
				<PageContent
					nextLink={getRoutePassengers().route}
					onBackCustomHandler={onBackHandler}
				>
					<DirectionDetails />
				</PageContent>
			</ContainerLayout>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default TicketPage
