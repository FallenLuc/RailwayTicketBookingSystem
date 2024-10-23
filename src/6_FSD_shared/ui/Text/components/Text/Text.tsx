import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { memo, useMemo } from "react"
import styles from "./Text.module.scss"

type TextProps = {
	className?: string
	inverted?: boolean
	text?: string
	classNamesText?: string
	title?: string
	classNameTitle?: string
}

export const Text = memo<TextProps>(props => {
	const { className, inverted = false, text, classNamesText, title } = props

	const mods = useMemo<Mods>(() => {
		return { [styles.inverted]: inverted }
	}, [inverted])

	const modsText = useMemo<Mods>(() => {
		return { [styles.textMargin]: title ? true : false }
	}, [title])

	return (
		<div className={classNamesHelp(styles.TextWrapper, mods, [className])}>
			{title ? title : null}
			{text ?
				<p className={classNamesHelp(styles.text, modsText, [classNamesText])}>{text}</p>
			:	null}
		</div>
	)
})
