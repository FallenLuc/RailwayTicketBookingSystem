import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import generalStyles from "../../Styles/general.module.scss"
import styles from "./SumInfo.module.scss"

type SumInfoProps = {
	className?: string
	sum: number
} & testingProps

export const SumInfo = TypedMemo((props: SumInfoProps) => {
	const { className, sum } = props

	return (
		<HStack
			className={classNamesHelp(styles.SumInfo, {}, [className, generalStyles.paddings])}
			align={"center"}
			justify={"spaceBetween"}
		>
			<Text
				text={"Итог"}
				fontSizeText={"l"}
				colorText={"main-light"}
				fontWeightText={"ultra-fat"}
				textTransform={"uppercase"}
			/>
			<HStack
				widthMax={false}
				align={"center"}
				gap={"XS"}
			>
				<Text
					text={sum.toString()}
					colorText={"accent-orange"}
					fontWeightText={"ultra-fat"}
					fontSizeText={"xl"}
				/>
				<span className={styles.currency}>₽</span>
			</HStack>
		</HStack>
	)
})
