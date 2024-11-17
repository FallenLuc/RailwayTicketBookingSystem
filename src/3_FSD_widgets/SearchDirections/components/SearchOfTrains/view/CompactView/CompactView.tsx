import { memo } from "react"
import styles from "./CompactView.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack, HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { LocationInput } from "@features/LocationInput"
import { ChangeButton } from "../../ui/ChangeButton/ChangeButton"
import { DateInput } from "@features/DateInput"
import { Button } from "@ui/Button"
import type { directionFormParametres } from "@entities/Direction"

type CompactViewProps = {
	className?: string
	onInputLocationFromHandler: (value: string) => void
	onInputLocationToHandler: (value: string) => void
	onInputDateFromHandler: (value: string) => void
	onInputDateToHandler: (value: string) => void
	onClickHandler: () => void
	parametres?: directionFormParametres
}
export const CompactView = memo<CompactViewProps>(props => {
	const {
		className,
		onInputDateToHandler,
		onInputDateFromHandler,
		onInputLocationToHandler,
		onInputLocationFromHandler,
		onClickHandler,
		parametres
	} = props

	const dateFrom = parametres?.date_start ? new Date(parametres?.date_start) : undefined
	const dateTo = parametres?.date_end ? new Date(parametres?.date_end) : undefined

	return (
		<VStack
			className={classNamesHelp(styles.CompactView, {}, [className])}
			gap={"gapXL"}
		>
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
					justify={"spaceBetween"}
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
						value={dateFrom}
						onInput={onInputDateFromHandler}
					/>
					<DateInput
						placeholder={"Обратно"}
						value={dateTo}
						onInput={onInputDateToHandler}
					/>
				</HStack>
			</VStack>
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
