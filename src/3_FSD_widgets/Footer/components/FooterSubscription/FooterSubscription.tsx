import { memo } from "react"
import styles from "./FooterSubscription.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"

type FooterSubscriptionProps = {
	className?: string
}
export const FooterSubscription = memo<FooterSubscriptionProps>(props => {
	const { className } = props

	return (
		<VStack
			className={classNamesHelp("", {}, [className])}
			gap={"gapL"}
			widthMax={true}
		>
			<Text
				TitleType={"h3"}
				title={"Подписка"}
				colorTitle={"light-gray"}
				fontSizeTitle={"l"}
				fontWeightTitle={"fat"}
			/>
			<div className={styles.fallback}></div>
		</VStack>
	)
})
