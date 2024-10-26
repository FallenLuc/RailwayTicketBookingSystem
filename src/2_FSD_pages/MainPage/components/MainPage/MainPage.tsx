import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"

type MainPageProps = {
	className?: string
}
export const MainPage = memo<MainPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header />
		</div>
	)
})

// To Feature Сделать Lazy
