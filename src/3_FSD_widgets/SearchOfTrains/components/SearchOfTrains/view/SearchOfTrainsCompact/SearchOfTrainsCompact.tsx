import { memo } from "react"
import styles from "./SearchOfTrainsCompact.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack, HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { LocationInput } from "@features/LocationInput"
import { ChangeButton } from "../../ui/ChangeButton/ChangeButton"
import { DateInput } from "@features/DateInput"
import { Button } from "@ui/Button"

type SearchOfTrainsCompactProps = {
	className?: string
	onInputLocationFromHandler: (value: string) => void
	onInputLocationToHandler: (value: string) => void
	onInputDateFromHandler: (value: string) => void
	onInputDateToHandler: (value: string) => void
	onClickHandler: () => void
}
export const SearchOfTrainsCompact = memo<SearchOfTrainsCompactProps>(props => {
	const {
		className,
		onInputDateToHandler,
		onInputDateFromHandler,
		onInputLocationToHandler,
		onInputLocationFromHandler,
		onClickHandler
	} = props

	return (
		<VStack
			className={classNamesHelp(styles.SearchOfTrainsCompact, {}, [className])}
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
