import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { FallbackLoader } from "@ui/FallbackLoader/components/FallBackLoader/FallBackLoader"
import { Overlay } from "@ui/Overlay"
import { HStack } from "@ui/Stack"
import styles from "./OverlayLoader.module.scss"

type OverlayLoaderProps = {
	className?: string
}
export const OverlayLoader = TypedMemo((props: OverlayLoaderProps) => {
	const { className } = props

	return (
		<HStack className={classNamesHelp(styles.OverlayLoader, {}, [className])}>
			<Overlay />
			<FallbackLoader />
		</HStack>
	)
})
