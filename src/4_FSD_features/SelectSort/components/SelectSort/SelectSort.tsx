import type { sortType } from "@customTypes/common.types"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Select } from "@ui/Select"
import { useCallback, useMemo } from "react"

type SelectSortProps = {
	className?: string
	value?: sortType
	onChange?: (value: sortType) => void
	onSubmit?: () => void
}

type optionType = {
	value: sortType
	content: string
}

export const SelectSort = TypedMemo((props: SelectSortProps) => {
	const { className, onChange, onSubmit } = props

	const options = useMemo<optionType[]>(
		() => [
			{ value: "date", content: "времени" },
			{ value: "price", content: "стоимости" },
			{ value: "duration", content: "длительности" }
		],
		[]
	)

	const onChangeHandler = useCallback(
		(value: sortType) => {
			onChange?.(value)
			onSubmit?.()
		},
		[onChange, onSubmit]
	)

	return (
		<Select
			onChange={onChangeHandler}
			label={"сортировать по"}
			options={options}
			className={className}
		/>
	)
})
