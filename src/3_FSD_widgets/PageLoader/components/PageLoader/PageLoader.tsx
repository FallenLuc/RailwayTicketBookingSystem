import { memo } from "react"
import styles from "./PageLoader.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HStack } from "@ui/Stack"
import { Overlay } from "@ui/Overlay"
import { FallbackLoader } from "@ui/FallbackLoader/components/FallBackLoader/FallBackLoader"

type PageLoaderProps = {
	className?: string
}
export const PageLoader = memo<PageLoaderProps>(props => {
	const { className } = props

	return (
		<HStack className={classNamesHelp(styles.PageLoader, {}, [className])}>
			<Overlay />
			<FallbackLoader />
		</HStack>
	)
})
