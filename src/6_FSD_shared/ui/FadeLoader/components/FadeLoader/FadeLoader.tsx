import type { HtmlHTMLAttributes } from "react"
import { memo } from "react"
import { ClipLoader } from "react-spinners"

type FadeLoaderProps = {
	size?: number
} & HtmlHTMLAttributes<HTMLDivElement>
export const FadeLoader = memo<FadeLoaderProps>(props => {
	const { size = 30 } = props

	return (
		<ClipLoader
			size={size}
			color={"#ffa800"}
		/>
	)
})
