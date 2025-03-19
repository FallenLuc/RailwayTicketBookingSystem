import { TrainIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { directionGeneralDataType } from "../../../types/directionData.type"
import styles from "./TrainInfo.module.scss"

type TrainInfoProps = {
	className?: string
	data?: directionGeneralDataType
}
export const TrainInfo = TypedMemo((props: TrainInfoProps) => {
	const { className, data } = props

	return (
		<VStack
			align={"center"}
			className={classNamesHelp(styles.TrainInfo, {}, [className])}
			justify={"center"}
			gap={"M"}
		>
			<TrainIcon className={styles.icon} />

			<Text
				title={data?.departure?.train.name}
				fontSizeTitle={"m"}
				colorTitle={"main-dark"}
				TitleType={"h5"}
			/>
			<VStack gap={"XXS"}>
				<Text
					text={`${data?.departure?.from.city.name} →`}
					fontSizeText={"s"}
					colorText={"main-dark"}
					textTransform={"capitalize"}
				/>
				<Text
					textTransform={"capitalize"}
					text={data?.departure?.to.city.name}
					fontSizeText={"s"}
					colorText={"main-dark"}
				/>
			</VStack>
		</VStack>
	)
})
