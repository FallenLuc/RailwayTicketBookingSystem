import { getRouteMain } from "@config/router"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Page } from "@ui/Page"
import { AboutUs } from "@widgets/AboutUs"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { HowItWorks } from "@widgets/HowItWorks"
import { Reviews } from "@widgets/Reviews"
import { useMemo } from "react"
import { HeaderContent } from "./ui/HeaderContent/HeaderContent"

const pagePath = getRouteMain()

const MainPage = TypedMemo(() => {
	const content = (
		<>
			<Header
				backgroundType={"main"}
				pagePath={pagePath.route}
			>
				<HeaderContent />
			</Header>
			<AboutUs />
			<HowItWorks />
			<Reviews />
		</>
	)

	const footer = useMemo(() => <Footer pagePath={pagePath.route} />, [])
	return (
		<Page
			content={content}
			footer={footer}
		/>
	)
})

export default MainPage
