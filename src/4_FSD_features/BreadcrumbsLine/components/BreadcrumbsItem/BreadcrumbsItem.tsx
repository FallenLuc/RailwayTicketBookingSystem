import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { stageMapper } from "../../lib/helpers/stageMapper/stageMapper.helper"
import type { stageType } from "../../types/stageType.type"
import styles from "./BreadcrumbsItem.module.scss"

type BreadcrumbsItemProps = {
	className?: string
	isChecked?: boolean
	stage: stageType
}
export const BreadcrumbsItem = TypedMemo((props: BreadcrumbsItemProps) => {
	const { className, stage, isChecked = false } = props

	return (
		<HStack
			className={classNamesHelp(
				styles.BreadcrumbsItem,
				{
					[styles.checked]: isChecked
				},
				[className]
			)}
			align={"center"}
			gap={"M"}
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
