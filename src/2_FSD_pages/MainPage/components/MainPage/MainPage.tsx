import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

type MainPageProps = {
	className?: string
}
export const MainPage = memo<MainPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<h1>Header</h1>
		</div>
	)
})
