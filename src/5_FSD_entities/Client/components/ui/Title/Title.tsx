import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./Title.module.scss"

type TitleProps = {
	className?: string
	title: string
} & testingProps

export const Title = TypedMemo((props: TitleProps) => {
	const { className, title } = props

	return (
		<HStack
			className={classNamesHelp(styles.Title, {}, [className])}
			align={"center"}
		>
			<Text
				title={title}
				fontSizeTitle={"l"}
				fontWeightTitle={"medium"}
				colorTitle={"main-dark"}
			/>
		</HStack>
	)
})
