import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import type { passengerDataType } from "../../types/passengerData.type"
import { PassengerCard } from "../PassengerCard/PassengerCard"
import styles from "./PassengersList.module.scss"

type PassengersListProps = {
	className?: string
	passengers?: passengerDataType[]
	onClick?: () => void
} & testingProps

export const PassengersList = TypedMemo((props: PassengersListProps) => {
	const { className, passengers, onClick } = props

	const onClickHandler = useCallback(() => {
		onClick?.()
	}, [onClick])

	return (
		<VStack
			className={classNamesHelp(styles.PassengersList, {}, [className])}
			align={"flexEnd"}
		>
			<Text
				className={styles.title}
				widthMax={true}
				title={"Пассажиры"}
				colorTitle={"main-dark"}
				fontSizeTitle={"l"}
				fontWeightTitle={"medium"}
			/>
			{passengers?.map((passenger, index) => (
				<PassengerCard
					key={index}
					passenger={passenger}
				/>
			))}
			<Button
				theme={"transparentDark"}
				onClick={onClickHandler}
				height={"s"}
				width={"s"}
			>
				Изменить
			</Button>
		</VStack>
	)
})
