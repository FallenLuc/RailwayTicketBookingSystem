import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { memo } from "react"

type SuccessPageProps = {
	className?: string
}
const SuccessPage = memo<SuccessPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header backgroundType={"end"} />
			<h1>Success</h1>
		</div>
	)
})

export default SuccessPage
