import { getRoutePassengers, getRoutePay } from "@config/router"
import { getRouteCheck } from "@config/router/helpers/gettersRoutesPaths.helper"
import type { testingProps } from "@customTypes/testing.types"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import {
	useClientDataActions,
	useGetClientDataInfoSelector,
	validateClientDataForm
} from "@features/FillingFormClientData"
import { useSetInitialClientData } from "@features/FillingFormClientData/lib/hooks/useSetInitialClientData.hook"
import {
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector,
	useSetCurrentDirectionByUrl
} from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { useSetInitialPassengers } from "@features/FillingFormPassengers"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createLinkWithQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { ClientDataInput } from "@widgets/ClientDataInput"
import { CurrentDirectionSidebar } from "@widgets/CurrentDirectionSidebar"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { PageContent } from "@widgets/PageContent"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

type PayPageProps = {
	className?: string
} & testingProps

const pagePath = getRoutePay()

const PayPage = TypedMemo((props: PayPageProps) => {
	const { className } = props

	const currentDirection = useGetCurrentDirectionInfoSelector()
	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const clientData = useGetClientDataInfoSelector()

	useSetCurrentDirectionByUrl(pagePath.route)
	useSetInitialPassengers(seatsInfo, currentDirection)
	useSetInitialClientData()

	const navigate = useNavigate()
	const { setClientData } = useClientDataActions()

	const onNextHandler = useCallback(() => {
		const params = {
			...formParametres,
			directionId: currentDirection?._id
		}

		const { validatedClientData, isValid } = validateClientDataForm(clientData)

		setClientData(validatedClientData)

		if (isValid) {
			navigate(createLinkWithQueryParams(getRouteCheck().route, params))
		}
	}, [clientData, currentDirection?._id, formParametres, navigate, setClientData])

	return (
		<Page className={classNamesHelp(undefined, undefined, [className])}>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			/>
			<BreadcrumbsLine stage={"payment"} />
			<ContainerLayout>
				<PageContent
					onNextCustomHandler={onNextHandler}
					nextLink={getRoutePassengers().route}
					backLink={getRoutePassengers().route}
				>
					<CurrentDirectionSidebar />
					<ClientDataInput />
				</PageContent>
			</ContainerLayout>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default PayPage
