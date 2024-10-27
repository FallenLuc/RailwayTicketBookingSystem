import { memo } from "react"
import styles from "./Logo.module.scss"
import { HStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { LogoIcon } from "@assets/index"
import { AppLink } from "@ui/AppLink"
import { getRouteMain } from "@config/router"

export const Logo = memo(() => {
	return (
		<HStack
			widthMax
			align={"center"}
			className={styles.logoOverly}
		>
			<ContainerLayout>
				<AppLink to={getRouteMain()}>
					<LogoIcon className={styles.logo} />
				</AppLink>
			</ContainerLayout>
		</HStack>
	)
})
