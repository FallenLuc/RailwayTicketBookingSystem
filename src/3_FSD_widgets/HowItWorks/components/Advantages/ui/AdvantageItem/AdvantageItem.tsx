import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { FC, SVGProps } from "react"
import { memo } from "react"
import styles from "./AdvantageItem.module.scss"

type AdvantageItemProps = {
	className?: string
	Icon: FC<SVGProps<SVGSVGElement>>
	text: string
}
export const AdvantageItem = memo<AdvantageItemProps>(props => {
	const { className, Icon, text } = props

	return (
		<VStack
			className={classNamesHelp(styles.AdvantageItem, {}, [className])}
			align={"center"}
			gap={"L"}
			TagType={"li"}
		>
			<Icon className={styles.icon} />

			<Text
				text={text}
				fontSizeText={"m"}
				colorText={"main-light"}
				fontWeightText={"medium"}
				align={"center"}
			/>
		</VStack>
	)
})
