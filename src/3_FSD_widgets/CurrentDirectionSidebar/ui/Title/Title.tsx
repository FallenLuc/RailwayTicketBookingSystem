import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import generalStyles from "../../Styles/general.module.scss"
import styles from "./Title.module.scss"

type TitleProps = {
	className?: string
} & testingProps

export const Title = TypedMemo((props: TitleProps) => {
	const { className } = props

	return (
		<VStack
			align={"center"}
			justify={"center"}
			className={classNamesHelp(styles.Title, {}, [className, generalStyles.paddings])}
		>
			<Text
				fontSizeTitle={"l"}
				fontWeightTitle={"fat"}
				colorTitle={"light-gray"}
				title={"Детали поездки"}
				textTransform={"uppercase"}
			/>
		</VStack>
	)
})
