import { memo, useMemo } from "react"
import styles from "./Background.module.scss"
import { BackgroundMainPageImage } from "@assets/index"
import { AppImage } from "@ui/AppImage"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

type BackgroundProps = {
	className?: string
	typeBackground: "main" | "search" | "end"
}
export const Background = memo<BackgroundProps>(props => {
	const { typeBackground } = props

	let srcBack = ""

	if (typeBackground == "main") {
		srcBack = BackgroundMainPageImage
	}

	const fallbackBackground = useMemo(
		() => (
			<div className={classNamesHelp(styles.background, {}, [styles.fallbackWrapper])}>
				<div className={styles.fallback}></div>
			</div>
		),
		[]
	)

	return (
		<AppImage
			src={srcBack}
			fallback={fallbackBackground}
			errorFallback={fallbackBackground}
			className={styles.background}
		/>
	)
})
