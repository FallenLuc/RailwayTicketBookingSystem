import type { testingProps } from "@customTypes/testing.types"
import { DirectionCard } from "@entities/Direction"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { FallbackLoader } from "@ui/FallbackLoader"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { ReactNode } from "react"
import { useGetLastDirectionsQuery } from "../../api/getLastDirections.rtkq"
import styles from "./LastTickets.module.scss"

type LastTicketsProps = {
	className?: string
} & testingProps
export const LastTickets = TypedMemo((props: LastTicketsProps) => {
	const { className, isTestLoading = false } = props

	const { isLoading, data, isError } = useGetLastDirectionsQuery()

	let content: ReactNode = <></>

	if (data) {
		const directions = data.slice(0, 3)
		content = directions.map(dir => (
			<li
				key={dir.id}
				className={styles.item}
			>
				<DirectionCard
					typeCard={"compact"}
					data={dir}
				/>
			</li>
		))
	}

	if (isError) {
		content = (
			<Text
				title={"Error with request last directions"}
				fontSizeTitle={"s"}
				TitleType={"h3"}
				colorTitle={"error"}
			/>
		)
	}

	if (isLoading || isTestLoading) {
		content = <FallbackLoader />
	}

	return (
		<VStack
			className={classNamesHelp(styles.LastTickets, {}, [className])}
			gap={"M"}
		>
			<Text
				title={"Последние билеты"}
				textTransform={"uppercase"}
				fontWeightTitle={"fat"}
				fontSizeTitle={"l"}
				colorTitle={"main-dark"}
			/>
			<VStack
				TagType={"ul"}
				gap={"S"}
			>
				{content}
			</VStack>
		</VStack>
	)
})
