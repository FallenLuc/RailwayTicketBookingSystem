import { getRoutePassengers, getRoutePay } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import {
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector,
	useSetCurrentDirectionByUrl
} from "@features/FillingFormCurrentDirection"
import { useSetInitialPassengers } from "@features/FillingFormPassengers"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { CurrentDirectionSidebar } from "@widgets/CurrentDirectionSidebar"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { PageContent } from "@widgets/PageContent"

type PayPageProps = {
	className?: string
} & testingProps

const pagePath = getRoutePay()

const PayPage = TypedMemo((props: PayPageProps) => {
	const { className } = props

	const currentDirection = useGetCurrentDirectionInfoSelector()
	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()

	useSetCurrentDirectionByUrl(pagePath.route)
	useSetInitialPassengers(seatsInfo, currentDirection)

	return (
		<Page className={classNamesHelp(undefined, undefined, [className])}>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			/>
			<BreadcrumbsLine stage={"payment"} />
			<ContainerLayout>
				<PageContent
					nextLink={getRoutePassengers().route}
					backLink={getRoutePassengers().route}
				>
					<CurrentDirectionSidebar />
					<VStack>{"контент"}</VStack>
				</PageContent>
			</ContainerLayout>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default PayPage
