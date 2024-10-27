import styles from "./NavLinks.module.scss"
import { memo } from "react"
import { HStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { AppLink } from "@ui/AppLink"
import { routeConfig } from "@config/router"

export const NavLinks = memo(() => {
	return (
		<HStack
			align={"center"}
			widthMax
			className={styles.listLinks}
		>
			<ContainerLayout>
				<HStack gap={"gapXL"}>
					{Object.values(routeConfig).map(link => {
						if (link.inHeader) {
							return (
								<AppLink
									key={link.path}
									to={link.path}
									fontsize="l"
									color={"main-light"}
									fontWeight={"think"}
								>
									{link.name}
								</AppLink>
							)
						}
					})}
				</HStack>
			</ContainerLayout>
		</HStack>
	)
})
