import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

import { memo } from "react"

type NotFoundPageProps = {
	className?: string
}
const NotFoundPage = memo<NotFoundPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<h1>Notfound</h1>
		</div>
	)
})

export default NotFoundPage
