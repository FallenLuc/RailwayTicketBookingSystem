import type { appColorType } from "@customTypes/style.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./FromSum.module.scss"

type FromSumProps = {
	className?: string
	sum: number
	color?: appColorType
}
export const FromSum = TypedMemo((props: FromSumProps) => {
	const { className, sum, color = "main-dark" } = props

	return (
		<HStack
			gap={"gapXS"}
			widthMax={false}
			align={"flexEnd"}
			className={classNamesHelp("", {}, [className])}
		>
			<span className={styles.spanFrom}>от</span>
			<Text
				fontSizeText={"m"}
				colorText={color}
				fontWeightText={"ultra-fat"}
				text={sum.toString()}
			/>
			<span className={styles.spanCurrency}>₽</span>
		</HStack>
	)
})
