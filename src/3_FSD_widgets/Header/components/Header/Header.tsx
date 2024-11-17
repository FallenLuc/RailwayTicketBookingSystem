import styles from "./Header.module.scss"
import type { PropsWithChildren } from "react"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HeaderLogo } from "../HeaderLogo/HeaderLogo"
import { HeaderContent } from "../HeaderContent/HeaderContent"
import { NavLinks } from "../NavLinks/NavLinks"
import { HeaderBackground } from "../HeaderBackground/HeaderBackground"
import { getRouteMainHeader } from "@config/router"

type HeaderProps = {
	className?: string
	typeBackground: "main" | "search" | "end"
} & PropsWithChildren
export const Header = memo<HeaderProps>(props => {
	const { className, typeBackground = "main", children } = props

	return (
		<header
			className={classNamesHelp(styles.Header, {}, [className, styles[typeBackground]])}
			id={getRouteMainHeader().hash}
		>
			<HeaderLogo />
			<NavLinks />
			<HeaderContent>{children}</HeaderContent>
			<HeaderBackground typeBackground={typeBackground} />
		</header>
	)
})
