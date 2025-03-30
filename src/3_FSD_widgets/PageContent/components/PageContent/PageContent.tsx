import { getRouteChooseTrain } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import {
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { createLinkWithQueryParams } from "@helpers/createLinkWithParams/createLinkWithParams.helper"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { ErrorScreen } from "@ui/ErrorScreen"
import { HStack, VStack } from "@ui/Stack"
import type { ReactNode } from "react"
import { Children, useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./PageContent.module.scss"

type PageContentProps = {
	nextLink?: string
	backLink?: string
	textNextButton?: string
	textBackButton?: string
	isNextButton?: boolean
	isBackButton?: boolean
	onNextCustomHandler?: () => void
	onBackCustomHandler?: () => void
	className?: string
	children?: ReactNode
} & testingProps

export const PageContent = TypedMemo((props: PageContentProps) => {
	const {
		className,
		nextLink = "",
		backLink = "",
		children,
		textBackButton,
		textNextButton,
		isBackButton = true,
		isNextButton = true,
		onNextCustomHandler,
		onBackCustomHandler
	} = props

	const navigate = useNavigate()

	const childrenArray = Children.toArray(children)

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
		navigate(createLinkWithQueryParams(backLink, params))
	}, [backLink, navigate, params])

	const onNextHandler = useCallback(() => {
		navigate(createLinkWithQueryParams(nextLink, params))
	}, [navigate, nextLink, params])

	const justifyButtons =
		isNextButton && isBackButton ? "spaceBetween"
		: isBackButton ? "flexStart"
		: "flexEnd"

	if (isLoading) {
		return <OverlayLoader />
	}

	if (error || !currentDirection) {
		return (
			<ErrorScreen
				type={"link"}
				text={"К поездам"}
				linkTo={createLinkWithQueryParams(getRouteChooseTrain().route, formParametres)}
			/>
		)
	}

	return (
		<VStack
			className={classNamesHelp(styles.PageContent, undefined, [className])}
			gap={"XL"}
		>
			<HStack gap={"XL"}>
				{childrenArray[0]}
				{childrenArray[1]}
			</HStack>
			<HStack
				align={"flexEnd"}
				justify={justifyButtons}
			>
				{isBackButton && (
					<Button
						theme={"defaultLight"}
						width={"s"}
						height={"m"}
						onClick={onBackCustomHandler || onBackHandler}
					>
						{textBackButton || "Назад"}
					</Button>
				)}
				{isNextButton && (
					<Button
						theme={"defaultLight"}
						width={"s"}
						height={"m"}
						onClick={onNextCustomHandler || onNextHandler}
					>
						{textNextButton || "Далее"}
					</Button>
				)}
			</HStack>
		</VStack>
	)
})
