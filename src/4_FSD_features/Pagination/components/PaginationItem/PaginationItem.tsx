import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import type { ReactNode } from "react"
import { useCallback } from "react"
import styles from "./PaginationItem.module.scss"

type PaginationItemProps = {
	className?: string
	content: ReactNode
	isActive?: boolean
	onClick: (value?: number) => void
}
export const PaginationItem = TypedMemo((props: PaginationItemProps) => {
	const { className, content, isActive, onClick } = props

	const onClickHandler = useCallback(() => {
		if (typeof content === "number") {
			onClick(content)
		}
		onClick()
	}, [content, onClick])

	return (
		<li
			className={classNamesHelp(styles.PaginationItem, { [styles.active]: isActive }, [
				className
			])}
		>
			<Button
				className={styles.button}
				theme={"clear"}
				onClick={onClickHandler}
			>
				{content}
			</Button>
		</li>
	)
})
