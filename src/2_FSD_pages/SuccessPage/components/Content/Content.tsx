import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./Content.module.scss"

type ContentProps = {
	className?: string
	name: string
} & testingProps

export const Content = TypedMemo((props: ContentProps) => {
	const { className, name } = props

	return (
		<VStack className={classNamesHelp(styles.Content, {}, [className])}>
			<Text
				text={name}
				colorText={"main-dark"}
				fontSizeText={"l"}
				fontWeightText={"ultra-fat"}
			/>
			<Text
				className={styles.text}
				text={"Ваш заказ успешно оформлен."}
				colorText={"main-dark"}
				fontSizeText={"s"}
				fontWeightText={"medium"}
			/>
			<Text
				text={"В ближайшее время с вами свяжется наш оператор для подтверждения."}
				colorText={"main-dark"}
				fontSizeText={"s"}
				fontWeightText={"medium"}
			/>
			<Text
				className={styles.footerText}
				text={"Благодарим Вас за оказанное доверие и желаем приятного путешествия!"}
				colorText={"main-dark"}
				fontSizeText={"m"}
				fontWeightText={"ultra-fat"}
			/>
		</VStack>
	)
})
