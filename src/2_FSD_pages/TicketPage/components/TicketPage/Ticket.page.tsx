import { getRouteTicket } from "@config/router"
import { useGetDirectionsListItemSelector } from "@entities/Direction"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useMemo } from "react"
import { useParams } from "react-router"

const TicketPage = TypedMemo(() => {
	const { id } = useParams<{ id: string }>()

	const ticketData = useGetDirectionsListItemSelector(id || "")

	const pagePath = getRouteTicket(id || "")

	let content = <></>

	if (ticketData) {
		content = (
			<>
				<Text title={ticketData.departure.from.city.name} />
				<Text title={ticketData.departure.to.city.name} />
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
