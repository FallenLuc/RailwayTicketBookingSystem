import type { testingProps } from "@customTypes/testing.types"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { DirectionInfo } from "../DirectionInfo/DirectionInfo"
import { Title } from "../ui/Title/Title"
import styles from "./CurrentDirectionSidebar.module.scss"

type CurrentDirectionSidebarProps = {
	className?: string
} & testingProps

export const CurrentDirectionSidebar = TypedMemo((props: CurrentDirectionSidebarProps) => {
	const { className } = props

	const directionInfo = useGetCurrentDirectionInfoSelector()

	return (
		<VStack
			TagType={"aside"}
			className={classNamesHelp(styles.CurrentDirectionSidebar, {}, [className])}
		>
			<Title />
			<DirectionInfo directionInfo={directionInfo} />
		</VStack>
	)
})
