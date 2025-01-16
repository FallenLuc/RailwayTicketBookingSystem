import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback, useMemo } from "react"
import styles from "./ErrorPage.module.scss"

type ErrorPageProps = {
	className?: string
} & testingProps

const ErrorPage = TypedMemo((props: ErrorPageProps) => {
	const { className } = props

	const onLoad = useCallback(() => {
		location.reload()
	}, [])

	const content = useMemo(
		() => (
			<VStack
				gap={"L"}
				align={"center"}
			>
				<Text
					TitleType={"h1"}
					colorTitle={"error"}
					align={"center"}
					fontSizeTitle={"xl"}
					title={"Произошла ошибка. Извините."}
				/>
				<Button
					width={"m"}
					height={"m"}
					onClick={onLoad}
					fontWeight={"ultra-fat"}
					fontSize={"m"}
					theme={"defaultDark"}
				>
					{"Перезагрузить страницу"}
				</Button>
			</VStack>
		),
		[onLoad]
	)

	return (
		<Page
			className={classNamesHelp(styles.ErrorPage, undefined, [className])}
			content={content}
		/>
	)
})

export default ErrorPage
