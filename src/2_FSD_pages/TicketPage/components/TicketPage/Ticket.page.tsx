import { getRouteTicket } from "@config/router"
import { useGetDirectionsListItemSelector } from "@entities/Direction"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useParams } from "react-router"

type TicketPageProps = {
	className?: string
}
const TicketPage = TypedMemo((props: TicketPageProps) => {
	const { className } = props

	const { id } = useParams<{ id: string }>()

	const ticketData = useGetDirectionsListItemSelector(id || "")

	const pagePath = getRouteTicket(id || "")

	let content = <></>

	if (ticketData) {
		content = (
			<>
				{/*<Text title={ticketData.departure.from.city.name} />*/}
				{/*<Text title={ticketData.departure.to.city.name} />*/}
			</>
		)
	}

	return (
		<div className={classNamesHelp("", {}, [className, "page"])}>
			<Header
				typeBackground={"search"}
				pagePath={pagePath.route}
			></Header>
			<BreadcrumbsLine stage={"tickets"} />
			<div>
				<ContainerLayout>{content}</ContainerLayout>
			</div>
			<Footer pagePath={pagePath.route} />
		</div>
	)
})

export default TicketPage
