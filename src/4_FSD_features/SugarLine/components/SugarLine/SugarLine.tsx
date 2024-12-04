import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { HStack } from "@ui/Stack"
import { stageMapper } from "../../lib/helpers/stageMapper/stageMapper.helper"
import { SugarItem } from "../SugarItem/SugarItem"
import styles from "./SugarLine.module.scss"

export type stageType = "tickets" | "passengers" | "payment" | "check"

type SugarLineProps = {
	className?: string
	stage?: stageType
}

export const SugarLine = TypedMemo((props: SugarLineProps) => {
	const { className, stage = "tickets" } = props

	return (
		<HStack className={classNamesHelp("", {}, [className])}>
			<div
				className={classNamesHelp(
					styles.fantomStage,
					{
						[styles.checkStage]: stageMapper(stage).number >= 1
					},
					[className]
				)}
			/>
			<ContainerLayout className={styles.wrapper}>
				<SugarItem
					stage={"tickets"}
					isChecked={stageMapper(stage).number >= 1}
				/>
				<SugarItem
					stage={"passengers"}
					isChecked={stageMapper(stage).number >= 2}
				/>
				<SugarItem
					stage={"payment"}
					isChecked={stageMapper(stage).number >= 3}
				/>
				<SugarItem
					stage={"check"}
					isChecked={stageMapper(stage).number >= 4}
				/>
			</ContainerLayout>
			<div
				className={classNamesHelp(
					styles.fantomStage,
					{
						[styles.checkStage]: stageMapper(stage).number === 4
					},
					[className]
				)}
			/>
		</HStack>
	)
})
