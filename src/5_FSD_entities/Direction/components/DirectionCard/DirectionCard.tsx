import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"
import type { directionGeneralDataType } from "../../types/directionData.type"
import { DirectionCompactCard } from "../DirectionCompactCard/DirectionCompactCard"
import { DirectionFullCard } from "../DirectionFullCard/DirectionFullCard"

type DirectionCardProps = {
	className?: string
	typeCard?: "full" | "compact"
	typeButton?: "default" | "clear"
	buttonText?: string
	data?: directionGeneralDataType
	onClick?: (direction: directionGeneralDataType) => void
	isTitle?: boolean
	onClickCustomHandler?: () => void
}
export const DirectionCard = TypedMemo((props: DirectionCardProps) => {
	const {
		className,
		data,
		typeCard = "full",
		onClick,
		onClickCustomHandler,
		typeButton,
		buttonText,
		isTitle
	} = props

	const onClickHandler = useCallback(() => {
		if (data) {
			onClick?.(data)
		}
	}, [data, onClick])

	if (typeCard === "full") {
		return (
			<DirectionFullCard
				isTitle={isTitle}
				className={className}
				data={data}
				typeButton={typeButton}
				buttonText={buttonText}
				onClick={onClickCustomHandler || onClickHandler}
			/>
		)
	}

	return (
		<DirectionCompactCard
			data={data}
			className={className}
		/>
	)
})
