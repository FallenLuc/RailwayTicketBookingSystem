import { getRoutePassengers } from "@config/router"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import {
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector,
	useSetCurrentDirectionByUrl
} from "@features/FillingFormCurrentDirection"
import { useSetInitialPassengers } from "@features/FillingFormPassengers"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { PageContent } from "../PageContent/PageContent"

const pagePath = getRoutePassengers()

const PassengersPage = TypedMemo(() => {
	const currentDirection = useGetCurrentDirectionInfoSelector()
	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()

	useSetCurrentDirectionByUrl(pagePath.route)
	useSetInitialPassengers(seatsInfo, currentDirection)

	return (
		<Page>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			/>
			<BreadcrumbsLine stage={"passengers"} />
			<ContainerLayout>
				<PageContent />
			</ContainerLayout>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default PassengersPage
