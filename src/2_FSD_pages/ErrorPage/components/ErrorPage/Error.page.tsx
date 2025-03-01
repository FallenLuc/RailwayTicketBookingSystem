import { getRouteMain } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./ErrorPage.module.scss"

type ErrorPageProps = {
	className?: string
	typeErrorPage?: "reload" | "toMain"
} & testingProps

const ErrorPage = TypedMemo((props: ErrorPageProps) => {
	const { className, typeErrorPage = "reload" } = props
	const navigate = useNavigate()

	const onClickHandler = useCallback(() => {
		if (typeErrorPage === "reload") {
			location.reload()
		} else {
			navigate(getRouteMain().route)
		}
	}, [navigate, typeErrorPage])

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
					title={
						typeErrorPage === "reload" ?
							"Произошла ошибка. Извините."
						:	"Нет данных. Начните заново"
					}
				/>
				<Button
					width={"m"}
					height={"m"}
					onClick={onClickHandler}
					fontWeight={"ultra-fat"}
					fontSize={"m"}
					theme={"defaultDark"}
				>
					{typeErrorPage === "reload" ? "Перезагрузить страницу" : "На главную"}
				</Button>
			</VStack>
		),
		[onClickHandler, typeErrorPage]
	)

	return (
		<Page
			className={classNamesHelp(styles.ErrorPage, undefined, [className])}
			content={content}
		/>
	)
})

export default ErrorPage
