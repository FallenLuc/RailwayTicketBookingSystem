import type { testingProps } from "@customTypes/testing.types"
import { DirectionInfo } from "@entities/Direction"
import { useGetCurrentDirectionToTripSelector } from "@features/FillingCurrentDirection"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import styles from "./DirectionDetails.module.scss"

type DirectionDetailsProps = {
	className?: string
} & testingProps

export const DirectionDetails = TypedMemo((props: DirectionDetailsProps) => {
	const { className } = props

	const currentDirection = useGetCurrentDirectionToTripSelector()

	return (
		<VStack className={classNamesHelp(styles.DirectionDetails, {}, [className])}>
			<DirectionInfo data={currentDirection} />
		</VStack>
	)
})
