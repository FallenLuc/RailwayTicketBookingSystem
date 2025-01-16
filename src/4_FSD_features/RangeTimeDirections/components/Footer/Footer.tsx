import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { RangeWithTitle } from "./ui/RangeWithTitle/RangeWithTitle"

type FooterProps = {
	className?: string
	isOpen?: boolean
	departureRange?: number[]
	arrivalRange?: number[]
	onChangeDepartureRange?: (range: number[]) => void
	onChangeArrivalRange?: (range: number[]) => void
}
export const Footer = TypedMemo((props: FooterProps) => {
	const {
		className,
		isOpen = false,
		departureRange,
		arrivalRange,
		onChangeDepartureRange,
		onChangeArrivalRange
	} = props

	if (!isOpen) return null

	return (
		<VStack
			className={classNamesHelp("", {}, [className])}
			gap={"XL"}
		>
			<RangeWithTitle
				title={"Время отбытия"}
				align={"left"}
				values={departureRange}
				onChange={onChangeDepartureRange}
			/>
			<RangeWithTitle
				title={"Время прибытия"}
				align={"right"}
				values={arrivalRange}
				onChange={onChangeArrivalRange}
			/>
		</VStack>
	)
})
