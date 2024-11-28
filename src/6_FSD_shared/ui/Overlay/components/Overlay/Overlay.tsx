import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo } from "react"
import styles from "./Overlay.module.scss"
import { RemoveScroll } from "react-remove-scroll"

type OverlayProps = {
	className?: string
	onClose?: () => void
}
export const Overlay = memo<OverlayProps>(props => {
	const { className, onClose } = props

	return (
		<RemoveScroll>
			<div
				onClick={onClose}
				className={classNamesHelp(styles.OverLay, {}, [
					className,
					RemoveScroll.classNames.zeroRight
				])}
			/>
		</RemoveScroll>
	)
})
