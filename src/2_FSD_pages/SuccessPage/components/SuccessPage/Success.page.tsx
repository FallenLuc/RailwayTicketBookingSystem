import { getRouteSuccess } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { memo } from "react"

type SuccessPageProps = {
	className?: string
}

const pagePath = getRouteSuccess()

const SuccessPage = memo<SuccessPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header
				pagePath={pagePath.route}
				backgroundType={"end"}
			/>
			<h1>Success</h1>
		</div>
	)
})

export default SuccessPage
