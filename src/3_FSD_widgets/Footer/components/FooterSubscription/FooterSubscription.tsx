import { Subscription } from "@features/Subscription"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo } from "react"

type FooterSubscriptionProps = {
	className?: string
}
export const FooterSubscription = memo<FooterSubscriptionProps>(props => {
	const { className } = props

	return (
		<VStack
			className={classNamesHelp("", {}, [className])}
			gap={"L"}
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
