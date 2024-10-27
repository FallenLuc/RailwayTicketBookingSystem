import { memo, useMemo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppImage } from "@ui/AppImage"
import styles from "./Background.module.scss"
import { BackgroundHowItWorks } from "@assets/index"
// To Feature Вынести в отдельный ui  component

type BackgroundProps = {
	className?: string
}
export const Background = memo<BackgroundProps>(props => {
	const { className } = props

	const fallback = useMemo(
		() => <div className={classNamesHelp(styles.background, {}, [styles.fallback])}></div>,
		[]
	)

	return (
		<AppImage
			src={BackgroundHowItWorks}
			fallback={fallback}
			errorFallback={fallback}
			className={classNamesHelp(styles.background, {}, [className])}
		/>
	)
})
