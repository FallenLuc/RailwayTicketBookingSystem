import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback, useState } from "react"
import { Footer } from "../Footer/Footer"
import { Header } from "../Header/Header"
import styles from "./RangeTimeDirections.module.scss"

type RangeTimeDirectionsProps = {
	className?: string
	direction?: "toTrip" | "fromTrip"
	arrivalRange?: number[]
	onChangeArrivalRange?: (arrivalRange: number[]) => void
	departureRange?: number[]
	onChangeDepartureRange?: (departureRange: number[]) => void
}
export const RangeTimeDirections = TypedMemo((props: RangeTimeDirectionsProps) => {
	const {
		className,
		direction = "toTrip",
		departureRange,
		arrivalRange,
		onChangeDepartureRange,
		onChangeArrivalRange
	} = props

	const [isOpen, setIsOpen] = useState(false)

	const onOpenHandler = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	return (
		<div
			className={classNamesHelp(styles.RangeTimeDirections, { [styles.padding]: isOpen }, [
				className
			])}
		>
			<Header
				direction={direction}
				isOpen={isOpen}
				onClick={onOpenHandler}
			/>
			<Footer
				isOpen={isOpen}
				departureRange={departureRange}
				arrivalRange={arrivalRange}
				onChangeDepartureRange={onChangeDepartureRange}
				onChangeArrivalRange={onChangeArrivalRange}
			/>
		</div>
	)
})
