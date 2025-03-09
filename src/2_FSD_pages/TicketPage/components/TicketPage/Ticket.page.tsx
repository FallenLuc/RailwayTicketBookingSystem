import { getRouteTicket } from "@config/router"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useSetCurrentDirectionByUrl } from "@features/FillingFormCurrentDirection"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useMemo } from "react"
import { useParams } from "react-router"
import { PageContent } from "../PageContent/PageContent"

const TicketPage = TypedMemo(() => {
	const { id } = useParams<{ id: string }>()
	const pagePath = getRouteTicket(id || "")

	useSetCurrentDirectionByUrl(pagePath.route)

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
