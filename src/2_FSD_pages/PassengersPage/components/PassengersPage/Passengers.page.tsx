import { getRoutePassengers } from "@config/router/helpers/gettersRoutesPaths.helper"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useMemo } from "react"
import { PageContent } from "../PageContent/PageContent"

const pagePath = getRoutePassengers()

const PassengersPage = TypedMemo(() => {
	const content = useMemo(
		() => (
			<>
				<Header
					backgroundType={"search"}
					pagePath={pagePath.route}
				/>
				<BreadcrumbsLine stage={"passengers"} />
				<ContainerLayout>
					<PageContent />
				</ContainerLayout>
			</>
		),
		[]
	)

	const footer = useMemo(() => <Footer pagePath={pagePath.route} />, [])

	return (
		<Page
			content={content}
			footer={footer}
		/>
	)
})

export default PassengersPage
