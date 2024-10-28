import { memo } from "react"
import styles from "./HeaderLogo.module.scss"
import { HStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { Logo } from "@ui/Logo"

export const HeaderLogo = memo(() => {
	return (
		<HStack
			widthMax
			align={"center"}
			className={styles.logoOverly}
		>
			<ContainerLayout>
				<Logo />
			</ContainerLayout>
		</HStack>
	)
})
