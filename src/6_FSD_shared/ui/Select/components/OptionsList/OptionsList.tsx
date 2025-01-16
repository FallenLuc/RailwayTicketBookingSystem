import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { OptionType } from "../Select/Select"

type OptionProps<T extends string> = {
	options: OptionType<T>[]
}
export const OptionsList = TypedMemo(<T extends string>(props: OptionProps<T>) => {
	const { options } = props

	return options.map(opt => (
		<option
			key={opt.value}
			value={opt.value}
		>
			{opt.content}
		</option>
	))
})
