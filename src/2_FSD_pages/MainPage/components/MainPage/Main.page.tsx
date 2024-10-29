import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { AboutUs } from "@widgets/AboutUs"
import { HowItWorks } from "@widgets/HowItWorks"
import { Reviews } from "@widgets/Reviews"
import { Footer } from "@widgets/Footer"

type MainPageProps = {
	className?: string
}
const MainPage = memo<MainPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header />
			<AboutUs />
			<HowItWorks />
			<Reviews />
			<Footer />
		</div>
	)
})

export default MainPage
