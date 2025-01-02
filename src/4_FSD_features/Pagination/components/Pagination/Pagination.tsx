import { ArrowLeftIcon, ArrowRightIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { useCallback, useMemo } from "react"
import { PaginationItem } from "../PaginationItem/PaginationItem"
import { PaginationItemList } from "../PaginationItemList/PaginationItemList"
import styles from "./Pagination.module.scss"

type PaginationProps = {
	className?: string
	quantity?: number
	value?: number
	onChange?: (value: number) => void
}
export const Pagination = TypedMemo((props: PaginationProps) => {
	const { className, quantity = 1, value = 1, onChange } = props

	const availableQuantity = quantity > 5 ? 5 : quantity //To Feature придумать алгоритм для многоточия в пагинации (helper, который все рассчитывает)

	if (availableQuantity <= 1) {
		return null
	}

	const onChangeHandler = useCallback(
		(value?: number) => {
			if (value) {
				onChange?.(value)
			}
		},
		[onChange]
	)

	const onDecreaseHandler = useCallback(() => {
		if (value > 1) {
			onChange?.(value - 1)
		}
	}, [onChange, value])

	const onIncreaseHandler = useCallback(() => {
		if (value < availableQuantity) {
			onChange?.(value + 1)
		}
	}, [availableQuantity, onChange, value])

	const arrowLeft = useMemo(() => <ArrowLeftIcon />, [])
	const arrowRight = useMemo(() => <ArrowRightIcon />, [])

	return (
		<HStack
			className={classNamesHelp(styles.Pagination, {}, [className])}
			TagType={"ul"}
			gap={"L"}
		>
			<PaginationItem
				content={arrowLeft}
				onClick={onDecreaseHandler}
			/>
			<PaginationItemList
				quantity={availableQuantity}
				activeNumber={value}
				onChange={onChangeHandler}
			/>
			<PaginationItem
				content={arrowRight}
				onClick={onIncreaseHandler}
			/>
		</HStack>
	)
})
