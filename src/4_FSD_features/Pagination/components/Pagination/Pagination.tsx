import { ArrowLeftIcon, ArrowRightIcon } from "@assets/index"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { useCallback, useMemo, useState } from "react"
import { PaginationItem } from "../PaginationItem/PaginationItem"
import { PaginationItemList } from "../PaginationItemList/PaginationItemList"
import styles from "./Pagination.module.scss"

type PaginationProps = {
	className?: string
	quantity?: number
	value: number
	onChange?: (value: number) => void
	onSubmit?: () => void
}
export const Pagination = TypedMemo((props: PaginationProps) => {
	const { className, quantity = 1, value, onSubmit, onChange } = props

	const availableQuantity = quantity > 5 ? 5 : quantity

	if (availableQuantity <= 1) {
		return null
	}

	const [activeNumber, setActiveNumber] = useState<number>(1 || value)

	const onChangeHandler = useCallback(
		(value?: number) => {
			if (value) {
				setActiveNumber(value)
				onChange?.(value)
				onSubmit?.()
			}
		},
		[onChange, onSubmit]
	)

	const onDecreaseHandler = useCallback(() => {
		if (activeNumber > 1) {
			setActiveNumber(prev => prev - 1)
			onChange?.(activeNumber)
			onSubmit?.()
		}
	}, [activeNumber, onChange, onSubmit])

	const onIncreaseHandler = useCallback(() => {
		if (activeNumber < availableQuantity) {
			setActiveNumber(prev => prev + 1)
			onChange?.(activeNumber)
			onSubmit?.()
		}
	}, [activeNumber, onChange, onSubmit, availableQuantity])

	const arrowLeft = useMemo(() => <ArrowLeftIcon />, [])
	const arrowRight = useMemo(() => <ArrowRightIcon />, [])

	//To Feature придумать алгоритм для многоточия в пагинации (helper, который все рассчитывает)

	return (
		<HStack
			className={classNamesHelp(styles.Pagination, {}, [className])}
			gap={"L"}
		>
			<PaginationItem
				content={arrowLeft}
				onClick={onDecreaseHandler}
			/>
			<PaginationItemList
				quantity={availableQuantity}
				activeNumber={activeNumber}
				onChange={onChangeHandler}
			/>
			<PaginationItem
				content={arrowRight}
				onClick={onIncreaseHandler}
			/>
		</HStack>
	)
})
