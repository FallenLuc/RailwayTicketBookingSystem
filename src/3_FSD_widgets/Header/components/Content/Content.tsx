import { memo } from "react"
import styles from "./Content.module.scss"
import { VStack, HStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { TitleIcon } from "@assets/index"

export const Content = memo(() => {
	return (
		<VStack // To Feature сделать фичу поиска
			className={styles.content}
			justify={"flexEnd"}
			widthMax={true}
		>
			<ContainerLayout>
				<HStack
					align={"center"}
					justify={"flexEnd"}
				>
					<TitleIcon className={styles.title} />
					<div className={styles.fallbackSearch}></div>
				</HStack>
			</ContainerLayout>
		</VStack>
	)
})
