import type { payMethodType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Checkbox } from "@ui/Checkbox"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Title } from "../ui/Title/Title"
import styles from "./PayMethodInputCard.module.scss"

type PayMethodInputCardProps = {
	className?: string
	value?: payMethodType
	onSetOnlinePayMethod?: () => void
	onSetOfflinePayMethod?: () => void
} & testingProps

export const PayMethodInputCard = TypedMemo((props: PayMethodInputCardProps) => {
	const { className, value, onSetOnlinePayMethod, onSetOfflinePayMethod } = props

	return (
		<VStack className={classNamesHelp(undefined, undefined, [className])}>
			<Title title={"Способ оплаты"} />
			<HStack
				gap={"XL"}
				align={"center"}
				className={styles.PayMethodInputCard}
			>
				<HStack
					widthMax={false}
					gap={"S"}
					align={"center"}
				>
					<Checkbox
						isChecked={value === "online"}
						onChange={onSetOnlinePayMethod}
					/>
					<Text
						text={"Онлайн"}
						fontSizeText={"m"}
						fontWeightText={"medium"}
						colorText={value === "online" ? "accent-orange" : "main-gray"}
					/>
				</HStack>
				<HStack
					widthMax={false}
					gap={"S"}
					align={"center"}
				>
					<Checkbox
						isChecked={value === "offline"}
						onChange={onSetOfflinePayMethod}
					/>
					<Text
						text={"Наличными"}
						fontSizeText={"m"}
						fontWeightText={"medium"}
						colorText={value === "offline" ? "accent-orange" : "main-gray"}
					/>
				</HStack>
			</HStack>
		</VStack>
	)
})
