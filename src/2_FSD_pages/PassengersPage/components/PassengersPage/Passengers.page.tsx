import { getRoutePassengers } from "@config/router/helpers/gettersRoutesPaths.helper"
import type { universalPageProps } from "@customTypes/common.types"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { useMemo } from "react"
import { PageContent } from "../PageContent/PageContent"

const pagePath = getRoutePassengers()

type PassengersPageProps = universalPageProps

const PassengersPage = TypedMemo((props: PassengersPageProps) => {
	const { ErrorPage } = props
	const currentDirection = useGetCurrentDirectionInfoSelector()

	if (!currentDirection) {
		return ErrorPage
	}

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
