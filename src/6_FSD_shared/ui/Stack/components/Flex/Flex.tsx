import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"
import { memo } from "react"
import styles from "./Flex.module.scss"

type justifyType = "spaceBetween" | "spaceAround" | "flexEnd" | "flexStart" | "center"
type alignType = "center" | "flexEnd" | "flexStart"
type directionType = "column" | "row"
type gapType = "gapXS" | "gapS" | "gapM" | "gapL" | "gapXL"

export type FlexProps = {
	className?: string
	justify?: justifyType
	align?: alignType
	direction?: directionType
	gap?: gapType
	widthMax?: boolean
} & PropsWithChildren &
	DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

const justifyMap: Record<justifyType, string> = {
	spaceBetween: styles.justifySpaceBetween,
	center: styles.justifyCenter,
	spaceAround: styles.justifySpaceAround,
	flexEnd: styles.justifyFlexEnd,
	flexStart: styles.justifyFlexStart
}

const alignMap: Record<alignType, string> = {
	center: styles.alignCenter,
	flexStart: styles.alignFlexStart,
	flexEnd: styles.alignFlexEnd
}

const directionMap: Record<directionType, string> = {
	row: styles.directionRow,
	column: styles.directionColumn
}

const gapMap: Record<gapType, string> = {
	gapXS: styles.gapXS,
	gapS: styles.gapS,
	gapM: styles.gapM,
	gapL: styles.gapL,
	gapXL: styles.gapXL
}

export const Flex = memo<FlexProps>(props => {
	const {
		className,
		justify = "flexStart",
		direction = "row",
		widthMax = true,
		align = "flexStart",
		gap,
		children
	} = props

	const mods: Mods = {
		[styles.widthMax]: widthMax
	}

	const classNames = [
		className,
		justifyMap[justify],
		alignMap[align],
		directionMap[direction],
		gap ? gapMap[gap] : undefined
	]

	return <div className={classNamesHelp(styles.Flex, mods, classNames)}>{children}</div>
})
