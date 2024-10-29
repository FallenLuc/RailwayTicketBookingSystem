import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import React, { memo, useMemo } from "react"
import { Link, type LinkProps } from "react-router-dom"
import styles from "./AppLink.module.scss"
import type { fontSizeType, fontWeightType, appColorType } from "@customTypes/style.types"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { colorMapper, colorHoverMapper } from "@helpers/colorMapper/colorMapper.helper"

export type AppLinkProps = {
	inverted?: boolean
	hover?: boolean
	fontsize?: fontSizeType
	fontWeight?: fontWeightType
	color?: appColorType
	colorHover?: appColorType
} & LinkProps

const Component = React.forwardRef<HTMLAnchorElement, AppLinkProps>((props, ref) => {
	const {
		className,
		to,
		children,
		target,
		fontsize = "m",
		fontWeight = "medium",
		color = "main-gray",
		colorHover,
		...otherProps
	} = props

	const mods = useMemo<Mods>(() => {
		return {}
	}, [])

	return (
		<Link
			ref={ref}
			target={target}
			to={to}
			className={classNamesHelp(styles.AppLink, mods, [
				className,
				fontSizeMapper(fontsize),
				fontWeightMapper(fontWeight),
				colorMapper(color),
				colorHoverMapper(colorHover || color)
			])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})

export const AppLink = memo<AppLinkProps>(Component)
