import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { AboutUs } from "@widgets/AboutUs"

type MainPageProps = {
	className?: string
}
export const MainPage = memo<MainPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header />
			<AboutUs />
		</div>
	)
})

// To Feature Сделать Lazy
