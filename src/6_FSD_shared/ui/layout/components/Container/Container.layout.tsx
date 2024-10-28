import type { PropsWithChildren } from "react"
import { memo } from "react"
import styles from "./ContainerLayout.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

type ContainerLayoutProps = {
	className?: string
} & PropsWithChildren
export const ContainerLayout = memo<ContainerLayoutProps>(props => {
	const { className, children } = props

	return <div className={classNamesHelp(styles.ContainerLayout, {}, [className])}>{children}</div>
})
