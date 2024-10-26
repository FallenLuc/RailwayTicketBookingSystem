import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

import { memo } from "react"

type NotFoundPageProps = {
	className?: string
}
export const NotFoundPage = memo<NotFoundPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<h1>Notfound</h1>
		</div>
	)
})
