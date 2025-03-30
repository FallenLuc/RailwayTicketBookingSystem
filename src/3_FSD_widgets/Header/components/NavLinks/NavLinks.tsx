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
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { AppLink } from "@ui/AppLink"
import { ContainerLayout } from "@ui/layout"
import { HStack } from "@ui/Stack"
import styles from "./NavLinks.module.scss"

type NavLinksProps = {
	pagePath: string
	params?: string
}

export const NavLinks = TypedMemo((props: NavLinksProps) => {
	const { pagePath, params } = props

	return (
		<HStack
			align={"center"}
			widthMax
			className={styles.listLinks}
		>
			<ContainerLayout>
				<HStack
					gap={"L"}
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
							to={getRouteContacts(pagePath, params).route}
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
