import { getRouteChooseTrain, getRoutePassengers } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import { DirectionCard, useGetDirectionsListDataSelector } from "@entities/Direction"
import { PassengersList } from "@entities/Passenger/components/PassengersList/PassengersList"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { useGetFormPassengersDataSelector } from "@features/FillingFormPassengers"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
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
		navigate(createQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	const onChangePassengerHandler = useCallback(() => {
		navigate(createQueryParams(getRoutePassengers().route, params))
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
		</VStack>
	)
})
