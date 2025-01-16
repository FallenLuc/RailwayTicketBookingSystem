import type { testingProps } from "@customTypes/testing.types"
import {
	DirectionCard,
	directionsListSliceReducers,
	useGetDirectionsListDataSelector,
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { asyncReducersList } from "@hooks/useAsyncReducer.hook"
import { useAsyncReducer } from "@hooks/useAsyncReducer.hook"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { ReactNode } from "react"
import styles from "./DirectionsList.module.scss"

type DirectionsListProps = {
	className?: string
} & testingProps

const asyncReducer: asyncReducersList = {
	directionsList: directionsListSliceReducers
}
export const DirectionsList = TypedMemo((props: DirectionsListProps) => {
	const { className, isTestLoading = false } = props

	useAsyncReducer(asyncReducer)

	const data = useGetDirectionsListDataSelector()
	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()

	let content: ReactNode = (
		<>
			{data.map(direction => (
				<DirectionCard
					key={direction.id}
					data={direction}
				/>
			))}
		</>
	)

	if (isLoading || isTestLoading) {
		content = <OverlayLoader />
	}

	if (error) {
		content = (
			<Text
				className={styles.textError}
				title={"Нет подходящих билетов"}
				fontSizeTitle={"xl"}
				fontWeightTitle={"ultra-fat"}
				colorTitle={"main-dark"}
				align={"center"}
			/>
		)
	}

	return (
		<VStack
			className={classNamesHelp(styles.DirectionsList, undefined, [className])}
			gap={"XL"}
		>
			{content}
		</VStack>
	)
})
