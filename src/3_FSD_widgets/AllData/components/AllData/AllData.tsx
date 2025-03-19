import { getRouteChooseTrain } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import { DirectionCard, useGetDirectionsListDataSelector } from "@entities/Direction"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
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

	const currentFullDirection = useMemo(
		() => directions.filter(direction => direction?.departure._id === currentDirection?._id)[0],
		//eslint-disable-next-line
		[currentDirection?._id]
	)

	const onClickHandler = useCallback(() => {
		navigate(createQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	return (
		<VStack
			className={classNamesHelp(undefined, undefined, [className])}
			gap={"L"}
		>
			<DirectionCard
				onClickCustomHandler={onClickHandler}
				data={currentFullDirection}
				typeCard={"full"}
				isTitle={true}
				typeButton={"clear"}
				buttonText={"Изменить"}
			/>
		</VStack>
	)
})
