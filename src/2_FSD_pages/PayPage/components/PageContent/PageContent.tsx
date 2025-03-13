import { getRouteChooseTrain, getRoutePassengers } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import {
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { ErrorScreen } from "@ui/ErrorScreen"
import { HStack, VStack } from "@ui/Stack"
import { CurrentDirectionSidebar } from "@widgets/CurrentDirectionSidebar"
import { useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PageContent.module.scss"

type PageContentProps = {
	className?: string
} & testingProps

export const PageContent = TypedMemo((props: PageContentProps) => {
	const { className } = props

	const navigate = useNavigate()

	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const currentDirection = useGetCurrentDirectionInfoSelector()
	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()

	const params = useMemo(() => {
		return {
			...formParametres,
			directionId: currentDirection?._id
		}
	}, [currentDirection?._id, formParametres])

	const onBackHandler = useCallback(() => {
		navigate(createQueryParams(getRoutePassengers().route, params))
	}, [navigate, params])

	const onNextHandler = useCallback(() => {
		navigate(createQueryParams(getRoutePassengers().route, params))
	}, [navigate, params])

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
			className={classNamesHelp(styles.PageContent, undefined, [className])}
			gap={"XL"}
		>
			<HStack gap={"XL"}>
				<CurrentDirectionSidebar />
				<VStack>{"контент"}</VStack>
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
