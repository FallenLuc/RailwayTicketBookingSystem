import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { HStack } from "@ui/Stack"
import { stageMapper } from "../../lib/helpers/stageMapper/stageMapper.helper"
import type { stageType } from "../../types/stageType.type"
import { BreadcrumbsItem } from "../BreadcrumbsItem/BreadcrumbsItem"
import styles from "./BreadcrumbsLine.module.scss"

type BreadcrumbsLineProps = {
	className?: string
	stage?: stageType
}

export const BreadcrumbsLine = TypedMemo((props: BreadcrumbsLineProps) => {
	const { className, stage = "tickets" } = props

	return (
		<HStack className={classNamesHelp(styles.BreadcrumbsLine, undefined, [className])}>
			<HStack className={styles.fantomWrapper}>
				<div
					className={classNamesHelp(
						styles.fantomStage,
						{
							[styles.checkStage]: stageMapper(stage).number >= 1
						},
						[className]
					)}
				></div>
				<div
					className={classNamesHelp(
						styles.fantomStage,
						{
							[styles.checkStage]: stageMapper(stage).number >= 4
						},
						[className]
					)}
				></div>
			</HStack>
			<ContainerLayout className={styles.wrapper}>
				<BreadcrumbsItem
					stage={"tickets"}
					isChecked={stageMapper(stage).number >= 1}
				/>
				<BreadcrumbsItem
					stage={"passengers"}
					isChecked={stageMapper(stage).number >= 2}
				/>
				<BreadcrumbsItem
					stage={"payment"}
					isChecked={stageMapper(stage).number >= 3}
				/>
				<BreadcrumbsItem
					stage={"check"}
					isChecked={stageMapper(stage).number >= 4}
				/>
			</ContainerLayout>
		</HStack>
	)
})
