import {
	getRouteAboutUs,
	getRouteContacts,
	getRouteHowItWorks,
	getRouteNameAboutUs,
	getRouteNameContacts,
	getRouteNameHowItWorks,
	getRouteNameReviews,
	getRouteReviews
} from "@config/router"
import { AppLink } from "@ui/AppLink"
import { ContainerLayout } from "@ui/layout"
import { HStack } from "@ui/Stack"
import { memo } from "react"
import styles from "./NavLinks.module.scss"

export const NavLinks = memo(() => {
	return (
		<HStack
			align={"center"}
			widthMax
			className={styles.listLinks}
		>
			<ContainerLayout>
				<HStack
					gap={"XL"}
					TagType={"nav"}
				>
					<li>
						<AppLink
							to={getRouteAboutUs().route}
							fontSize="l"
							colorHover={"gold"}
							color={"main-light"}
							fontWeight={"think"}
						>
							{getRouteNameAboutUs()}
						</AppLink>
					</li>
					<li>
						<AppLink
							to={getRouteHowItWorks().route}
							fontSize="l"
							colorHover={"gold"}
							color={"main-light"}
							fontWeight={"think"}
						>
							{getRouteNameHowItWorks()}
						</AppLink>
					</li>
					<li>
						<AppLink
							to={getRouteReviews().route}
							fontSize="l"
							colorHover={"gold"}
							color={"main-light"}
							fontWeight={"think"}
						>
							{getRouteNameReviews()}
						</AppLink>
					</li>
					<li>
						<AppLink
							to={getRouteContacts().route}
							fontSize="l"
							colorHover={"gold"}
							color={"main-light"}
							fontWeight={"think"}
						>
							{getRouteNameContacts()}
						</AppLink>
					</li>
				</HStack>
			</ContainerLayout>
		</HStack>
	)
})
