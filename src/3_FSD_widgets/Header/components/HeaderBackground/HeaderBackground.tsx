import {
	BackgroundMainPageImage,
	BackgroundSearchPageImage,
	BackgroundSuccessPageImage
} from "@assets/index"
import { Background as BackgroundUi } from "@ui/Background"
import { memo } from "react"

type HeaderBackgroundProps = {
	className?: string
	typeBackground: "main" | "search" | "end"
}
export const HeaderBackground = memo<HeaderBackgroundProps>(props => {
	const { typeBackground } = props

	let srcBack = BackgroundMainPageImage

	if (typeBackground === "main") {
		srcBack = BackgroundMainPageImage
	}

	if (typeBackground === "search") {
		srcBack = BackgroundSearchPageImage
	}

	if (typeBackground === "end") {
		srcBack = BackgroundSuccessPageImage
	}

	return <BackgroundUi background={srcBack} />
})
