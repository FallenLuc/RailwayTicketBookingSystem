import { ConductorStepImage, EmailStepImage, PrintStepImage } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { IconWithText } from "../ui/IconWithText/IconWithText"
import styles from "./StepsList.module.scss"

type StepsListProps = {
	className?: string
} & testingProps

export const StepsList = TypedMemo((props: StepsListProps) => {
	const { className } = props

	return (
		<HStack
			className={classNamesHelp(styles.StepList, undefined, [className])}
			align={"center"}
			gap={"XL"}
		>
			<IconWithText
				image={EmailStepImage}
				text={"билеты будут отправлены на ваш e-mail"}
			/>
			<IconWithText
				image={PrintStepImage}
				text={"распечатайте и сохраняйте билеты до даты поездки"}
			/>
			<IconWithText
				image={ConductorStepImage}
				text={"предьявите распечатанные билеты при посадке"}
			/>
		</HStack>
	)
})
