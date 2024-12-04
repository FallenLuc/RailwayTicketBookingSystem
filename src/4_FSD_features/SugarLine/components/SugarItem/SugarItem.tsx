import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { stageMapper } from "../../lib/helpers/stageMapper/stageMapper.helper"
import type { stageType } from "../SugarLine/SugarLine"
import styles from "./SugarItem.module.scss"

type SugarItemProps = {
	className?: string
	isChecked?: boolean
	stage: stageType
}
export const SugarItem = TypedMemo((props: SugarItemProps) => {
	const { className, stage, isChecked = false } = props

	return (
		<HStack
			className={classNamesHelp(
				styles.SugarItem,
				{
					[styles.checked]: isChecked
				},
				[className]
			)}
			align={"center"}
			gap={"gapM"}
		>
			<div className={styles.number}>{stageMapper(stage).number}</div>
			<Text
				title={stageMapper(stage).name}
				fontSizeTitle={"l"}
				fontWeightTitle={"ultra-fat"}
				colorTitle={"main-light"}
			/>
		</HStack>
	)
})
