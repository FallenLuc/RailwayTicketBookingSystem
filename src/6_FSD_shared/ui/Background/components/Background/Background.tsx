import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import styles from "./Background.module.scss"
import { AppImage } from "../../../AppImage"
import { memo, useMemo } from "react"

type BackgroundProps = {
	className?: string
	background: string
}
export const Background = memo<BackgroundProps>(props => {
	const { className, background } = props

	const fallback = useMemo(
		() => <div className={classNamesHelp(styles.background, {}, [styles.fallback])}></div>,
		[]
	)

	return (
		<AppImage
			src={background}
			fallback={fallback}
			errorFallback={fallback}
			className={classNamesHelp(styles.background, {}, [className])}
		/>
	)
})
