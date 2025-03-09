import { getRouteChooseTrain } from "@config/router"
import { getRoutePassengers } from "@config/router/helpers/gettersRoutesPaths.helper"
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
import { Text } from "@ui/Text"
import { DirectionDetails } from "@widgets/DirectionDetails"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PageContent.module.scss"

type PageContentProps = {
	className?: string
} & testingProps

export const PageContent = TypedMemo((props: PageContentProps) => {
	const { className } = props

	const navigate = useNavigate()

	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const currentDirection = useGetCurrentDirectionInfoSelector()

	const onClickBackHandler = useCallback(() => {
		navigate(createQueryParams(getRouteChooseTrain().route, formParametres))
	}, [formParametres, navigate])

	const onClickForwardHandler = useCallback(() => {
		const params = {
			...formParametres,
			directionId: currentDirection?._id
		}
		navigate(createQueryParams(getRoutePassengers().route, params))
	}, [currentDirection?._id, formParametres, navigate])

	if (isLoading) {
		return <OverlayLoader />
	}

	if (error) {
		return (
			<ErrorScreen
				type="link"
				text={"К поездам"}
				linkTo={createQueryParams(getRouteChooseTrain().route, formParametres)}
			/>
		)
	}

	return (
		<HStack
			className={classNamesHelp(styles.PageContent, undefined, [className])}
			gap={"XL"}
		>
			<VStack
				gap={"XL"}
				align={"flexEnd"}
				justify={"spaceBetween"}
			>
				<HStack
					align={"center"}
					justify={"spaceBetween"}
				>
					<Text
						title={"Выбор мест"}
						TitleType={"h2"}
						colorTitle={"main-dark"}
						textTransform={"uppercase"}
					/>
					<Button
						width={"s"}
						height={"m"}
						theme={"defaultLight"}
						onClick={onClickBackHandler}
					>
						{"Назад"}
					</Button>
				</HStack>

				<DirectionDetails />

				<Button
					width={"s"}
					height={"m"}
					theme={"defaultLight"}
					onClick={onClickForwardHandler}
				>
					{"Далее"}
				</Button>
			</VStack>
		</HStack>
	)
})
