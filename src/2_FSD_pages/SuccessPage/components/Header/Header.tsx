import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./Header.module.scss"

type HeaderProps = {
	className?: string
	sum: number
} & testingProps

export const Header = TypedMemo((props: HeaderProps) => {
	const { className, sum } = props

	return (
		<HStack
			align={"center"}
			justify={"spaceBetween"}
			className={classNamesHelp(styles.Header, undefined, [className])}
		>
			<Text
				text={"№Заказа 285АА"}
				fontSizeText={"l"}
				fontWeightText={"fat"}
				colorText={"main-dark"}
			/>
			<HStack
				gap={"S"}
				widthMax={false}
			>
				<Text
					text={"сумма"}
					colorText={"main-gray"}
					fontSizeText={"l"}
				/>
				<Text
					text={`${sum.toString()} ₽`}
					colorText={"main-dark"}
					fontSizeText={"l"}
				/>
			</HStack>
		</HStack>
	)
})
