import type { payMethodType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import styles from "./PayMethod.module.scss"

type PayMethodProps = {
	className?: string
	onClick?: () => void
	payMethod?: payMethodType
} & testingProps

export const PayMethod = TypedMemo((props: PayMethodProps) => {
	const { className, payMethod = "online", onClick } = props

	const onClickHandler = useCallback(() => onClick?.(), [onClick])

	return (
		<VStack className={classNamesHelp(styles.PayMethod, {}, [className])}>
			<Text
				widthMax={true}
				fontWeightTitle={"medium"}
				fontSizeTitle={"l"}
				colorTitle={"main-dark"}
				title={"Способ оплаты"}
				className={styles.title}
			/>
			<VStack
				gap={"L"}
				className={styles.wrapper}
			>
				<Text
					text={payMethod === "online" ? "Онлайн" : "Наличными"}
					colorText={"main-dark"}
					fontSizeText={"m"}
					fontWeightText={"medium"}
				/>
				<VStack align={"flexEnd"}>
					<Button
						theme={"transparentDark"}
						onClick={onClickHandler}
						height={"s"}
						width={"s"}
					>
						Изменить
					</Button>
				</VStack>
			</VStack>
		</VStack>
	)
})
