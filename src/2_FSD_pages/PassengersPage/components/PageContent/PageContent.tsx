import { getRouteTicket } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import { validatePassengerForm } from "@entities/Passenger/lib/helpers/validatePassengerForm.helper"
import {
	useCurrentDirectionActions,
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionsPassengersSelector
} from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import { CurrentDirectionSidebar } from "@widgets/CurrentDirectionSidebar"
import { PassengersList } from "@widgets/PassengersList"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PageContent.module.scss"

type PageContentProps = {
	className?: string
} & testingProps

export const PageContent = TypedMemo((props: PageContentProps) => {
	const { className } = props

	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const currentDirection = useGetCurrentDirectionInfoSelector()
	const passengers = useGetCurrentDirectionsPassengersSelector()

	const { verifyFields } = useCurrentDirectionActions()

	const navigate = useNavigate()

	const onBackHandler = useCallback(() => {
		const params = {
			...formParametres,
			directionId: currentDirection?._id
		}

		navigate(createQueryParams(getRouteTicket(currentDirection?._id || "").route, params))
	}, [currentDirection?._id, formParametres, navigate])

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
