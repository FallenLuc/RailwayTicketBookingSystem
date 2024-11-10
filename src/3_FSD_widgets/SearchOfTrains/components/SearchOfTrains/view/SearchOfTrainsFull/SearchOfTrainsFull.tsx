import styles from "./SearchOfTrainsFull.module.scss"
import { VStack, HStack } from "@ui/Stack"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text } from "@ui/Text"
import { LocationInput } from "@features/LocationInput"
import { ChangeButton } from "../../ui/ChangeButton/ChangeButton"
import { DateInput } from "@features/DateInput"
import { Button } from "@ui/Button"
import { memo } from "react"

type SearchOfTrainsFullProps = {
	className?: string
	onInputLocationFromHandler: (value: string) => void
	onInputLocationToHandler: (value: string) => void
	onInputDateFromHandler: (value: string) => void
	onInputDateToHandler: (value: string) => void
	onClickHandler: () => void
}
export const SearchOfTrainsFull = memo<SearchOfTrainsFullProps>(props => {
	const {
		className,
		onInputDateFromHandler,
		onInputLocationToHandler,
		onInputLocationFromHandler,
		onInputDateToHandler,
		onClickHandler
	} = props

	return (
		<VStack
			className={classNamesHelp(styles.SearchOfTrainsFull, {}, [className])}
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
						/>
						<ChangeButton />
						<LocationInput
							onInput={onInputLocationToHandler}
							placeholder={"Куда"}
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
					>
						<DateInput onInput={onInputDateFromHandler} />
						<ChangeButton />
						<DateInput onInput={onInputDateToHandler} />
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
