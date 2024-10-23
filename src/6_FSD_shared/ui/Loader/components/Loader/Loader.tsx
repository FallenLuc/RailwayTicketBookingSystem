import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type HtmlHTMLAttributes, memo } from "react"

type LoaderProps = {
	classNames?: string
} & HtmlHTMLAttributes<HTMLDivElement>

export const Loader = memo<LoaderProps>(props => {
	const { classNames, ...otherProps } = props

	return (
		<div
			className={classNamesHelp("", {}, [classNames])}
			{...otherProps}
		>
			<div className={""}>
				<div></div>
			</div>
		</div>
	)
})
