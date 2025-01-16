import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useMemo } from "react"
import { PaginationItem } from "../PaginationItem/PaginationItem"

type PaginationItemListListProps = {
	quantity: number
	activeNumber: number
	onChange: (value?: number) => void
}
export const PaginationItemList = TypedMemo((props: PaginationItemListListProps) => {
	const { quantity, onChange, activeNumber } = props

	const arrayQuantityPages = useMemo(() => new Array(quantity).fill(1), [quantity])

	const paginationList = arrayQuantityPages.map((_, index) => {
		const number = index + 1

		return (
			<PaginationItem
				key={index}
				content={number}
				isActive={activeNumber === number}
				onClick={onChange}
			/>
		)
	})

	return paginationList
})
