import { useScrollToAnchor } from "@config/router/lib/hooks/useScrollToAnchor.hook"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { ReactNode } from "react"
import { VStack } from "../../../Stack"
import styles from "./Page.module.scss"

type PageProps = {
	className?: string
	content?: ReactNode
	footer?: ReactNode
}
export const Page = TypedMemo((props: PageProps) => {
	const { className, content, footer } = props

	useScrollToAnchor()

	return (
		<VStack
			className={classNamesHelp(styles.Page, {}, [className])}
			justify={"spaceBetween"}
		>
			{content}
			{footer}
		</VStack>
	)
})
