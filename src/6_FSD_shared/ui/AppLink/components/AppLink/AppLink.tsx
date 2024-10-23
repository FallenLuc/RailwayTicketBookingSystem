import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import React, { memo, useMemo } from "react"
import { Link, type LinkProps } from "react-router-dom"
import styles from "./AppLink.module.scss"

export type AppLinkProps = {
	inverted?: boolean
	hover?: boolean
} & LinkProps

const Component = React.forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
	const { className, to, children, target, ...otherProps } = props

	const mods = useMemo<Mods>(() => {
		return {}
	}, [])

	return (
		<Link
			ref={ref}
			target={target}
			to={to}
			className={classNamesHelp(styles.AppLink, mods, [className])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})

export const AppLink = memo<AppLinkProps>(Component)
