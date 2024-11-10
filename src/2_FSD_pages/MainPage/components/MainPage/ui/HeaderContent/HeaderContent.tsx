import { memo } from "react"
import styles from "./HeaderContent.module.scss"
import { TitleIcon } from "@assets/index"
import { SearchOfTrains } from "@widgets/SearchOfTrains"
import { HStack } from "@ui/Stack"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

type HeaderContentProps = {
	className?: string
}
export const HeaderContent = memo<HeaderContentProps>(props => {
	const { className } = props

	return (
		<HStack
			align={"center"}
			justify={"flexEnd"}
			className={classNamesHelp("", {}, [className])}
		>
			<TitleIcon className={styles.title} />
			<SearchOfTrains view={"compact"} />
		</HStack>
	)
})
