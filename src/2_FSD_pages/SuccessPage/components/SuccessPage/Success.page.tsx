import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"

type SuccessPageProps = {
	className?: string
}
const SuccessPage = memo<SuccessPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header />
			<h1>Success</h1>
		</div>
	)
})

export default SuccessPage
