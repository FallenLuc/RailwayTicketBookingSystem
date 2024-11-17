import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { AboutUs } from "@widgets/AboutUs"
import { HowItWorks } from "@widgets/HowItWorks"
import { Reviews } from "@widgets/Reviews"
import { Footer } from "@widgets/Footer"
import { useScrollToAnchor } from "@providers/RouterProvider/lib/hooks/useScrollToAnchor.hook"
import { HeaderContent } from "./ui/HeaderContent/HeaderContent"

type MainPageProps = {
	className?: string
}
const MainPage = memo<MainPageProps>(props => {
	const { className } = props

	useScrollToAnchor()

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header typeBackground={"main"}>
				<HeaderContent />
			</Header>
			<AboutUs />
			<HowItWorks />
			<Reviews />
			<Footer />
		</div>
	)
})

export default MainPage
