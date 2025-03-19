import { getRouteCheck } from "@config/router/helpers/gettersRoutesPaths.helper"
import type { testingProps } from "@customTypes/testing.types"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useSetInitialClientData } from "@features/FillingFormClientData"
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

type CheckPageProps = {
	className?: string
} & testingProps

const pagePath = getRouteCheck()

const CheckPage = TypedMemo((props: CheckPageProps) => {
	const { className } = props

	const currentDirection = useGetCurrentDirectionInfoSelector()
	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()

	useSetCurrentDirectionByUrl(pagePath.route)
	useSetInitialPassengers(seatsInfo, currentDirection)
	useSetInitialClientData()

	return (
		<Page className={classNamesHelp(undefined, undefined, [className])}>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			/>
			<BreadcrumbsLine stage={"check"} />
			<ContainerLayout>
				<PageContent>
					<CurrentDirectionSidebar />
					<VStack>{"контент"}</VStack>
				</PageContent>
			</ContainerLayout>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default CheckPage
