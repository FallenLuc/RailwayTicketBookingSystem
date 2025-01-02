import { SHOW_LIMITS } from "@constants/common.constant"
import type { showLimit } from "@customTypes/common.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import { ShowLimitItem } from "./ui/ShowLimitItem/ShowLimitItem"

type ShowLimitProps = {
	className?: string
	value?: showLimit
	onChange?: (value: showLimit) => void
}

export const ShowLimit = TypedMemo((props: ShowLimitProps) => {
	const { className, onChange, value = SHOW_LIMITS[0] } = props

	const onChangeHandler = useCallback(
		(value: showLimit) => {
			onChange?.(value)
		},
		[onChange]
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
					<ShowLimitItem
						key={item}
						item={item}
						isActive={item === value}
						onChange={onChangeHandler}
					/>
				))}
			</HStack>
		</HStack>
	)
})
