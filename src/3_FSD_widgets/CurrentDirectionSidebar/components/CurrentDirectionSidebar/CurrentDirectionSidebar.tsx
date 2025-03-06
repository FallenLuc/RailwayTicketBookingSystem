import type { testingProps } from "@customTypes/testing.types"
import {
	useGetCurrentDirectionInfoSelector,
	useGetCurrentDirectionSeatsInfoSelector
} from "@features/FillingFormCurrentDirection"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { SumInfo } from "../../ui/SumInfo/SumInfo"
import { Title } from "../../ui/Title/Title"
import { DirectionInfo } from "../DirectionInfo/DirectionInfo"
import { PassengerInfo } from "../PassengerInfo/PassengerInfo"
import styles from "./CurrentDirectionSidebar.module.scss"

type CurrentDirectionSidebarProps = {
	className?: string
} & testingProps

export const CurrentDirectionSidebar = TypedMemo((props: CurrentDirectionSidebarProps) => {
	const { className } = props

	const directionInfo = useGetCurrentDirectionInfoSelector()
	const seatsInfo = useGetCurrentDirectionSeatsInfoSelector()
	const sum = useGetCurrentDirectionSeatsInfoSelector()

	return (
		<VStack
			TagType={"aside"}
			className={classNamesHelp(styles.CurrentDirectionSidebar, {}, [className])}
		>
			<Title />
			<DirectionInfo directionInfo={directionInfo} />
			<PassengerInfo
				countPassenger={seatsInfo}
				sum={sum}
			/>
			<SumInfo sum={sum} />
		</VStack>
	)
})
