import {
	getRouteCheck,
	getRouteChooseTrain,
	getRouteSuccess
} from "@config/router/helpers/gettersRoutesPaths.helper"
import type { testingProps } from "@customTypes/testing.types"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import {
	useGetClientDataInfoSelector,
	useSetInitialClientData
} from "@features/FillingFormClientData"
import {
	useGetCurrentDirectionCarriageInfoSelector,
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector,
	useSetCurrentDirectionByUrl
} from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import {
	useGetFormPassengersDataSelector,
	useSetInitialPassengers
} from "@features/FillingFormPassengers"
import { OverlayLoader } from "@features/OverlayLoader"
import { useToPayMutation } from "@features/PayOrder"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createLinkWithQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ErrorScreen } from "@ui/ErrorScreen"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { AllData } from "@widgets/AllData"
import { CurrentDirectionSidebar } from "@widgets/CurrentDirectionSidebar"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { PageContent } from "@widgets/PageContent"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

type CheckPageProps = {
	className?: string
} & testingProps

const pagePath = getRouteCheck()

const CheckPage = TypedMemo((props: CheckPageProps) => {
	const { className } = props

	const currentDirection = useGetCurrentDirectionInfoSelector()
	const passengers = useGetFormPassengersDataSelector()
	const client = useGetClientDataInfoSelector()
	const carriageInfo = useGetCurrentDirectionCarriageInfoSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()

	useSetCurrentDirectionByUrl(pagePath.route)
	useSetInitialPassengers(seatsInfo, currentDirection)
	useSetInitialClientData()

	const navigate = useNavigate()
	const [toPay, response] = useToPayMutation()

	const onPayHandler = useCallback(() => {
		if (currentDirection?._id && passengers.length && client && carriageInfo) {
			toPay({ directionId: currentDirection?._id, carriageInfo, client, passengers }).then(
				() => navigate(getRouteSuccess().route)
			)
		}
	}, [carriageInfo, client, currentDirection?._id, navigate, passengers, toPay])

	if (response.isLoading) {
		return <OverlayLoader />
	}

	if (response.isError) {
		return (
			<ErrorScreen
				type={"link"}
				text={"К поездам"}
				title={"При оплате произошла ошибка, попробуйте снова"}
				linkTo={createLinkWithQueryParams(getRouteChooseTrain().route, formParametres)}
			/>
		)
	}

	return (
		<Page className={classNamesHelp(undefined, undefined, [className])}>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			/>
			<BreadcrumbsLine stage={"check"} />
			<ContainerLayout>
				<PageContent
					textNextButton={"Подтвердить"}
					onNextCustomHandler={onPayHandler}
					isBackButton={false}
				>
					<CurrentDirectionSidebar />
					<VStack>
						<AllData />
					</VStack>
				</PageContent>
			</ContainerLayout>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default CheckPage
