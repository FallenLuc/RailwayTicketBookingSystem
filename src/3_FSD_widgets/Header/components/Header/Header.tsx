import styles from "./Header.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HeaderLogo } from "../HeaderLogo/HeaderLogo"
import { HeaderContent } from "../HeaderContent/HeaderContent"
import { NavLinks } from "../NavLinks/NavLinks"
import { HeaderBackground } from "../HeaderBackground/HeaderBackground"
import { getRouteMainHeader } from "@config/router"

type HeaderProps = {
	className?: string
}
export const Header = memo<HeaderProps>(props => {
	const { className } = props

	return (
		<header
			className={classNamesHelp(styles.Header, {}, [className])}
			id={getRouteMainHeader().hash}
		>
			<HeaderLogo />
			<NavLinks />
			<HeaderContent />
			<HeaderBackground typeBackground={"main"} />
		</header>
	)
})
