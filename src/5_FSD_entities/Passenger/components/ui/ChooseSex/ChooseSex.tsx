import type { sexType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import styles from "./ChooseSex.module.scss"

type ChooseSexProps = {
	className?: string
	value: sexType
	onChange?: (value: sexType) => void
} & testingProps

export const ChooseSex = TypedMemo((props: ChooseSexProps) => {
	const { className, value, onChange } = props

	const onSetMaleSexHandler = useCallback(() => {
		onChange?.("male")
	}, [onChange])

	const onSetFemaleSexHandler = useCallback(() => {
		onChange?.("female")
	}, [onChange])

	return (
		<VStack
			className={classNamesHelp(undefined, undefined, [className])}
			gap={"S"}
			widthMax={false}
		>
			<Text
				text={"Пол"}
				colorText={"main-gray"}
				fontSizeText={"xs"}
				fontWeightText={"medium"}
			/>

			<HStack>
				<Button
					fontSize={"l"}
					color={"main-dark"}
					fontWeight={"ultra-fat"}
					textUppercase={true}
					theme={"clear"}
					className={classNamesHelp(
						styles.button,
						{
							[styles.active]: value === "male"
						},
						[styles.maleButton]
					)}
					onClick={onSetMaleSexHandler}
				>
					{"М"}
				</Button>
				<Button
					fontSize={"l"}
					color={"main-dark"}
					fontWeight={"ultra-fat"}
					textUppercase={true}
					theme={"clear"}
					className={classNamesHelp(
						styles.button,
						{
							[styles.active]: value === "female"
						},
						[styles.femaleButton]
					)}
					onClick={onSetFemaleSexHandler}
				>
					{"Ж"}
				</Button>
			</HStack>
		</VStack>
	)
})
