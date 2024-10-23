import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import { HStack } from "../../../Stack"
import styles from "./RatingStars.module.scss"

type RatingStarsProps = {
	className?: string
	rating?: number
	isReset?: boolean
	isLocked?: boolean
	onChangeRating?: (value: number) => void
}

export const RatingStars = memo<RatingStarsProps>(props => {
	const { className, isLocked = false } = props

	const ratingCount = [1, 2, 3, 4, 5]

	return (
		<div className={classNamesHelp("", { [styles.cursorPointer]: !isLocked }, [className])}>
			<HStack gap={"gap16"}>
				{ratingCount.map(rat => (
					<>{rat}</>
				))}
			</HStack>
		</div>
	)
})
