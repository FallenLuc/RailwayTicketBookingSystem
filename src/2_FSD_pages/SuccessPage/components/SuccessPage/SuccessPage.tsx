import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

type SuccessPageProps = {
	className?: string
}
export const SuccessPage = memo<SuccessPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<h1>Success</h1>
		</div>
	)
})
