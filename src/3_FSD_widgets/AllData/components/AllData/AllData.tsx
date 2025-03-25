import { getRouteChooseTrain, getRoutePassengers, getRoutePay } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import { PayMethod } from "@entities/Client/components/PayMethod/PayMethod"
import { DirectionCard, useGetDirectionsListDataSelector } from "@entities/Direction"
import { PassengersList } from "@entities/Passenger"
import { useGetClientDataInfoSelector } from "@features/FillingFormClientData"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { useGetFormPassengersDataSelector } from "@features/FillingFormPassengers"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createLinkWithQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"

type AllDataProps = {
	className?: string
} & testingProps

export const AllData = TypedMemo((props: AllDataProps) => {
	const { className } = props

	const navigate = useNavigate()

	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const currentDirection = useGetCurrentDirectionInfoSelector()
	const directions = useGetDirectionsListDataSelector()
	const passengers = useGetFormPassengersDataSelector()
	const client = useGetClientDataInfoSelector()

	const currentFullDirection = useMemo(
		() => directions.filter(direction => direction?.departure._id === currentDirection?._id)[0],
		//eslint-disable-next-line
		[currentDirection?._id]
	)

	const params = useMemo(
		() => ({ ...formParametres, directionId: currentDirection?._id }),
		[currentDirection?._id, formParametres]
	)

	const onChangeDirectionHandler = useCallback(() => {
		navigate(createLinkWithQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	const onChangePassengerHandler = useCallback(() => {
		navigate(createLinkWithQueryParams(getRoutePassengers().route, params))
	}, [navigate, params])

	const onChangePayMethodHandler = useCallback(() => {
		navigate(createLinkWithQueryParams(getRoutePay().route, params))
	}, [navigate, params])

	return (
		<VStack
			className={classNamesHelp(undefined, undefined, [className])}
			gap={"L"}
		>
			<DirectionCard
				onClickCustomHandler={onChangeDirectionHandler}
				data={currentFullDirection}
				typeCard={"full"}
				isTitle={true}
				typeButton={"clear"}
				buttonText={"Изменить"}
			/>
			<PassengersList
				passengers={passengers}
				onClick={onChangePassengerHandler}
			/>
			<PayMethod
				payMethod={client?.payMethod}
				onClick={onChangePayMethodHandler}
			/>
		</VStack>
	)
})
