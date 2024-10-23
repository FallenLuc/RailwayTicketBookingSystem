import type { Mods } from "@helpers/classNamesHelp/classNamesHelp"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type ButtonHTMLAttributes, memo, useMemo } from "react"
import styles from "./Button.module.scss"

type ButtonProps = {
	inverted?: boolean
	disabled?: boolean
	error?: boolean
	hover?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = memo<ButtonProps>(props => {
	const { children, className, ...otherProps } = props

	const mods = useMemo<Mods>(() => {
		return {}
	}, [])

	return (
		<button
			data-testid="button-ui"
			className={classNamesHelp(styles.Button, mods, [className])}
			{...otherProps}
		>
			{children}
		</button>
	)
})
