import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppImage } from "@ui/AppImage"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./IconWithText.module.scss"

type IconWithTextProps = {
	className?: string
	image: string
	text?: string
} & testingProps

export const IconWithText = TypedMemo((props: IconWithTextProps) => {
	const { className, image, text } = props

	return (
		<VStack
			className={classNamesHelp(undefined, undefined, [className])}
			gap={"S"}
			align={"center"}
		>
			<AppImage
				src={image}
				className={styles.icon}
			/>
			<Text
				text={text}
				className={styles.text}
				align={"center"}
				fontSizeText={"s"}
				fontWeightText={"fat"}
				colorText={"main-dark"}
			/>
		</VStack>
	)
})
