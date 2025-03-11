import { getRouteChooseTrain, getRouteTicket } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import {
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { validatePassengerForm } from "@entities/Passenger/lib/helpers/validatePassengerForm.helper"
import {
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector
} from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import {
	useFormPassengersActions,
	useGetFormPassengersDataSelector
} from "@features/FillingFormPassengers"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { ErrorScreen } from "@ui/ErrorScreen"
import { HStack, VStack } from "@ui/Stack"
import { CurrentDirectionSidebar } from "@widgets/CurrentDirectionSidebar"
import { PassengersList } from "@widgets/PassengersList"
import { useCallback, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PageContent.module.scss"

type PageContentProps = {
	className?: string
} & testingProps

export const PageContent = TypedMemo((props: PageContentProps) => {
	const { className } = props

	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const currentDirection = useGetCurrentDirectionInfoSelector()
	const passengers = useGetFormPassengersDataSelector()
	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()

	const { verifyFields, initPassengers } = useFormPassengersActions()

	const navigate = useNavigate()

	const params = useMemo(() => {
		return {
			...formParametres,
			directionId: currentDirection?._id
		}
	}, [currentDirection?._id, formParametres])

	useEffect(() => {
		if (!isLoading && !error && currentDirection) {
			initPassengers(seatsInfo)
		}
		//eslint-disable-next-line
	}, [isLoading, error, currentDirection?._id])

	const onBackHandler = useCallback(() => {
		navigate(createQueryParams(getRouteTicket(currentDirection?._id || "").route, params))
	}, [currentDirection?._id, navigate, params])

	const onNextHandler = useCallback(() => {
		let isAllValid = true

		const validatedPassengers = passengers.map(passenger => {
			const { validatedPassenger, isValid } = validatePassengerForm(passenger)

			if (!isValid) {
				isAllValid = false
			}

			return { id: passenger.id, changes: validatedPassenger }
		})

		verifyFields({ isAllValid, validatedPassengers })

		if (isAllValid) {
			const params = {
				...formParametres,
				directionId: currentDirection?._id
			}

			navigate(createQueryParams(getRouteTicket(currentDirection?._id || "").route, params))
		}
	}, [currentDirection?._id, formParametres, navigate, passengers, verifyFields])

	if (isLoading) {
		return <OverlayLoader />
	}

	if (error) {
		return (
			<ErrorScreen
				type={"link"}
				text={"К поездам"}
				linkTo={createQueryParams(getRouteChooseTrain().route, formParametres)}
			/>
		)
	}

	return (
		<VStack
			className={classNamesHelp(styles.PageContent, {}, [className])}
			gap={"XL"}
		>
			<HStack gap={"XL"}>
				<CurrentDirectionSidebar />
				<PassengersList />
			</HStack>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
			>
				<Button
					theme={"defaultLight"}
					width={"s"}
					height={"m"}
					onClick={onBackHandler}
				>
					Назад
				</Button>
				<Button
					theme={"defaultLight"}
					width={"s"}
					height={"m"}
					onClick={onNextHandler}
				>
					Далее
				</Button>
			</HStack>
		</VStack>
	)
})
