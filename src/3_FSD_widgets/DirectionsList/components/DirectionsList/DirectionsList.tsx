import {
	DirectionCard,
	useGetDirectionsListDataSelector,
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { OverlayLoader } from "@features/OverlayLoader"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { ReactNode } from "react"
import styles from "./DirectionsList.module.scss"

type DirectionsListProps = {
	className?: string
}
export const DirectionsList = TypedMemo((props: DirectionsListProps) => {
	const { className } = props

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

	if (isLoading) {
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
		<VStack className={classNamesHelp(styles.DirectionsList, {}, [className])}>
			<VStack gap={"XL"}>{content}</VStack>
		</VStack>
	)
})
