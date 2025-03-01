import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import styles from "./PageContent.module.scss"

type PageContentProps = {
	className?: string
} & testingProps

export const PageContent = TypedMemo((props: PageContentProps) => {
	const { className } = props

	return <div className={classNamesHelp(styles.PageContent, {}, [className])}></div>
})
