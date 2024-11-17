import { memo } from "react"
import styles from "./HeaderContent.module.scss"
import { TitleIcon } from "@assets/index"
import { SearchDirections } from "@widgets/SearchDirections"
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
			<SearchDirections view={"compact"} />
		</HStack>
	)
})
