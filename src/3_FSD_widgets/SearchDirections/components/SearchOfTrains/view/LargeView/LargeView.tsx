import styles from "./LargeView.module.scss"
import { VStack, HStack } from "@ui/Stack"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text } from "@ui/Text"
import { LocationInput } from "@features/LocationInput"
import { ChangeButton } from "../../ui/ChangeButton/ChangeButton"
import { DateInput } from "@features/DateInput"
import { Button } from "@ui/Button"
import { memo } from "react"
import type { directionFormParametres } from "@entities/Direction"

type LargeViewProps = {
	className?: string
	onInputLocationFromHandler: (value: string) => void
	onInputLocationToHandler: (value: string) => void
	onInputDateFromHandler: (value: string) => void
	onInputDateToHandler: (value: string) => void
	onClickHandler: () => void
	parametres?: directionFormParametres
}
export const LargeView = memo<LargeViewProps>(props => {
	const {
		className,
		onInputDateFromHandler,
		onInputLocationToHandler,
		onInputLocationFromHandler,
		onInputDateToHandler,
		onClickHandler,
		parametres
	} = props

	const dateFrom = parametres?.date_start ? new Date(parametres?.date_start) : undefined
	const dateTo = parametres?.date_end ? new Date(parametres?.date_end) : undefined

	return (
		<VStack
			className={classNamesHelp(styles.LargeView, {}, [className])}
			gap={"gapL"}
			align={"flexEnd"}
		>
			<HStack gap={"gapS"}>
				<VStack gap={"gapS"}>
					<Text
						title={"Направление"}
						TitleType={"h3"}
						fontSizeTitle={"l"}
						fontWeightTitle={"think"}
						colorTitle={"main-light"}
					/>
					<HStack
						gap={"gapXS"}
						align={"center"}
					>
						<LocationInput
							onInput={onInputLocationFromHandler}
							placeholder={"Откуда"}
							value={parametres?.from_city_id}
						/>
						<ChangeButton />
						<LocationInput
							onInput={onInputLocationToHandler}
							placeholder={"Куда"}
							value={parametres?.to_city_id}
						/>
					</HStack>
				</VStack>
				<VStack gap={"gapS"}>
					<Text
						title={"Дата"}
						TitleType={"h3"}
						fontSizeTitle={"l"}
						fontWeightTitle={"think"}
						colorTitle={"main-light"}
					/>
					<HStack
						gap={"gapXS"}
						align={"center"}
						justify={"spaceBetween"}
					>
						<DateInput
							placeholder={"Туда"}
							onInput={onInputDateFromHandler}
							value={dateFrom}
						/>
						<DateInput
							placeholder={"Обратно"}
							onInput={onInputDateToHandler}
							value={dateTo}
						/>
					</HStack>
				</VStack>
			</HStack>

			<Button
				type={"submit"}
				theme={"defaultDark"}
				width={"m"}
				height={"m"}
				textUppercase={true}
				onClick={onClickHandler}
			>
				{"Найти Билеты"}
			</Button>
		</VStack>
	)
})
