import { memo } from "react"
import styles from "./Logo.module.scss"
import { getRouteMain } from "@config/router"
import { LogoIcon } from "@assets/index"
import { AppLink } from "../../../AppLink"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

type LogoProps = {
	className?: string
}
export const Logo = memo<LogoProps>(props => {
	const { className } = props

	return (
		<AppLink
			to={getRouteMain().route}
			className={classNamesHelp("", {}, [className])}
		>
			<LogoIcon className={styles.logo} />
		</AppLink>
	)
})
