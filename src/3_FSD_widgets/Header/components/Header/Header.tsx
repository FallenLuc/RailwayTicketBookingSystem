import styles from "./Header.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HeaderLogo } from "../HeaderLogo/HeaderLogo"
import { Content } from "../Content/Content"
import { NavLinks } from "../NavLinks/NavLinks"
import { Background } from "../Background/Background"

type HeaderProps = {
	className?: string
}
export const Header = memo<HeaderProps>(props => {
	const { className } = props

	return (
		<header className={classNamesHelp(styles.Header, {}, [className])}>
			<HeaderLogo />
			<NavLinks />
			<Content />
			<Background typeBackground={"main"} />
		</header>
	)
})
