import { SHOW_LIMITS } from "@constants/common.constant"
import type { showLimit } from "@customTypes/common.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback, useState } from "react"
import styles from "./ShowLimit.module.scss"

type ShowLimitProps = {
	className?: string
	value?: showLimit
	onChange?: (value: showLimit) => void
	onSubmit?: () => void
}

export const ShowLimit = TypedMemo((props: ShowLimitProps) => {
	const { className, onChange, onSubmit, value } = props

	const [limit, setLimit] = useState<showLimit>(value || SHOW_LIMITS[0])

	const onChangeHandler = useCallback(
		(value: showLimit) => {
			setLimit(value)
			onChange?.(limit)
			onSubmit?.()
		},
		[limit, onChange, onSubmit]
	)

	return (
		<HStack
			gap={"XS"}
			align={"center"}
			widthMax={false}
			className={classNamesHelp(undefined, undefined, [className])}
		>
			<Text
				text={"показывать по:"}
				fontSizeText={"s"}
			/>
			<HStack
				widthMax={false}
				TagType={"ul"}
				gap={"XS"}
			>
				{SHOW_LIMITS.map(item => (
					<li
						key={item}
						className={classNamesHelp(styles.item, { [styles.active]: item === limit })}
						onClick={useCallback(() => onChangeHandler(item), [item])}
					>
						{item}
					</li>
				))}
			</HStack>
		</HStack>
	)
})
