import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Subscription } from "@features/Subscription"

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
			<Subscription />
		</VStack>
	)
})
