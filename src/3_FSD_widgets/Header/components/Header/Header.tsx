import styles from "./Header.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Logo } from "../Logo/Logo"
import { Content } from "../Content/Content"
import { NavLinks } from "../NavLinks/NavLinks"
import { Background } from "../Background/Background"

type HeaderProps = {
	className?: string
}
export const Header = memo<HeaderProps>(props => {
	const { className } = props

	return (
		<section className={classNamesHelp(styles.Header, {}, [className])}>
			<Logo />
			<NavLinks />
			<Content />
			<Background typeBackground={"main"} />
		</section>
	)
})
