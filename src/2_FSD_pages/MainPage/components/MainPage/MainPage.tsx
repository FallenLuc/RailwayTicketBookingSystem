import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { AboutUs } from "@widgets/AboutUs"
import { HowItWorks } from "@widgets/HowItWorks"
import { Reviews } from "@widgets/Reviews"

type MainPageProps = {
	className?: string
}
export const MainPage = memo<MainPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header />
			<AboutUs />
			<HowItWorks />
			<Reviews />
		</div>
	)
})

// To Feature Сделать Lazy
