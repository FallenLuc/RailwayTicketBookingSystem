import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import React, { memo, useState, useCallback } from "react"
import { Link, type LinkProps } from "react-router-dom"
import styles from "./AppLink.module.scss"
import type { fontSizeType, fontWeightType, appColorType } from "@customTypes/style.types"
import { fontSizeMapper, fontWeightMapper } from "@helpers/fontMapper/fontMapper.helper"
import { colorMapper } from "@helpers/colorMapper/colorMapper.helper"

export type AppLinkProps = {
	inverted?: boolean
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

	const [hover, setHover] = useState(false)

	const onHoverHandler = useCallback(() => {
		setHover(true)
	}, [])

	const onLeaveHandler = useCallback(() => {
		setHover(false)
	}, [])

	return (
		<Link
			ref={ref}
			onMouseEnter={onHoverHandler}
			onMouseLeave={onLeaveHandler}
			target={target}
			to={to}
			className={classNamesHelp(styles.AppLink, {}, [
				className,
				fontSizeMapper(fontsize),
				fontWeightMapper(fontWeight),
				colorMapper(hover ? colorHover ?? color : color)
			])}
			{...otherProps}
		>
			{children}
		</Link>
	)
})

export const AppLink = memo<AppLinkProps>(Component)
