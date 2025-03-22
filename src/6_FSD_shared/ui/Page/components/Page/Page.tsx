import { useScrollToAnchor } from "@config/router/lib/hooks/useScrollToAnchor.hook"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import type { ReactNode } from "react"
import { Children } from "react"
import { VStack } from "../../../Stack"
import styles from "./Page.module.scss"

type PageProps = {
	className?: string
	content?: ReactNode
	footer?: ReactNode
	children?: ReactNode
}
export const Page = TypedMemo((props: PageProps) => {
	const { className, content, footer, children } = props

	useScrollToAnchor()

	const childrenArray = Children.toArray(children)

	return (
		<VStack
			className={classNamesHelp(styles.Page, {}, [className])}
			justify={"spaceBetween"}
		>
			<VStack>
				{content ||
					childrenArray.map((item, i) => {
						if (i !== childrenArray.length - 1) {
							return item
						}
					})}
			</VStack>

			{footer || childrenArray[childrenArray.length - 1]}
		</VStack>
	)
})
