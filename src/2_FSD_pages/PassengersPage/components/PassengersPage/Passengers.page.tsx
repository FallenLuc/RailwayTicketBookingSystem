import { getRoutePassengers, getRoutePay, getRouteTicket } from "@config/router"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import {
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector,
	useSetCurrentDirectionByUrl
} from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import {
	useFormPassengersActions,
	useGetFormPassengersDataSelector,
	useSetInitialPassengers,
	validatePassengerForm
} from "@features/FillingFormPassengers"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { CurrentDirectionSidebar } from "@widgets/CurrentDirectionSidebar"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { PageContent } from "@widgets/PageContent"
import { PassengersInputList } from "@widgets/PassengersInputList"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

const pagePath = getRoutePassengers()

const PassengersPage = TypedMemo(() => {
	const currentDirection = useGetCurrentDirectionInfoSelector()
	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const passengers = useGetFormPassengersDataSelector()

	useSetCurrentDirectionByUrl(pagePath.route)
	useSetInitialPassengers(seatsInfo, currentDirection)

	const navigate = useNavigate()
	const { verifyFields } = useFormPassengersActions()

	const onNextHandler = useCallback(() => {
		let isAllValid = true
		const params = {
			...formParametres,
			directionId: currentDirection?._id
		}

		const validatedPassengers = passengers.map(passenger => {
			const { validatedPassenger, isValid } = validatePassengerForm(passenger)

			if (!isValid) {
				isAllValid = false
			}

			return { id: passenger.id, changes: validatedPassenger }
		})

		verifyFields({ isAllValid, validatedPassengers })

		if (isAllValid) {
			navigate(createQueryParams(getRoutePay().route, params))
		}
	}, [currentDirection?._id, formParametres, navigate, passengers, verifyFields])

	return (
		<Page>
			<Header
				backgroundType={"search"}
				pagePath={pagePath.route}
			/>
			<BreadcrumbsLine stage={"passengers"} />
			<ContainerLayout>
				<PageContent
					onNextCustomHandler={onNextHandler}
					backLink={getRouteTicket(currentDirection?._id || "").route}
				>
					<CurrentDirectionSidebar />
					<PassengersInputList />
				</PageContent>
			</ContainerLayout>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default PassengersPage
