import { ProfileIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { passengerDataType } from "../../types/passengerData.type"
import styles from "./PassengerCard.module.scss"

type PassengerCardProps = {
	className?: string
	passenger?: passengerDataType
} & testingProps

export const PassengerCard = TypedMemo((props: PassengerCardProps) => {
	const { className, passenger } = props

	return (
		<HStack
			className={classNamesHelp(styles.PassengerCard, {}, [className])}
			align={"center"}
			gap={"L"}
		>
			<ProfileIcon className={styles.icon} />
			<VStack gap={"S"}>
				<Text
					text={`${passenger?.surname?.value} ${passenger?.firstName?.value} ${passenger?.lastName?.value}`}
					colorText={"main-dark"}
					fontSizeText={"m"}
					fontWeightText={"medium"}
				/>
				<Text
					text={`Пол ${passenger?.sex === "male" ? "мужской" : "женский"}`}
					colorText={"main-gray"}
					fontSizeText={"m"}
					fontWeightText={"medium"}
				/>
				<Text
					text={`Дата рождения ${passenger?.dateBirth?.value}`}
					colorText={"main-gray"}
					fontSizeText={"m"}
					fontWeightText={"medium"}
				/>
				<Text
					text={`Паспорт ${passenger?.seriesPassport?.value} ${passenger?.numberPassport?.value}`}
					colorText={"main-gray"}
					fontSizeText={"m"}
					fontWeightText={"medium"}
				/>
			</VStack>
		</HStack>
	)
})
