import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { directionGeneralDataType } from "../../types/directionData.type"
import { DirectionCompactCard } from "./view/DirectionCompactCard/DirectionCompactCard"
import { DirectionFullCard } from "./view/DirectionFullCard/DirectionFullCard"

type DirectionCardProps = {
	className?: string
	typeCard?: "full" | "compact"
	data?: directionGeneralDataType
}
export const DirectionCard = TypedMemo((props: DirectionCardProps) => {
	const { className, data, typeCard = "full" } = props

	if (typeCard === "full") {
		return (
			<DirectionFullCard
				className={className}
				data={data}
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
