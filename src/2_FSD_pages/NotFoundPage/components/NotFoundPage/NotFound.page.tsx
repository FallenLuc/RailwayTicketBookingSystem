import { getRouteMain } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Button } from "@ui/Button"
import { Page } from "@ui/Page"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"

import { memo, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import style from "./NotFound.module.scss"

type NotFoundPageProps = {
	className?: string
}
const NotFoundPage = memo<NotFoundPageProps>(props => {
	const { className } = props

	const navigate = useNavigate()

	const onNavigateHandler = useCallback(() => {
		navigate(getRouteMain().route)
	}, [navigate])

	return (
		<Page className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header
				backgroundType={"search"}
				pagePath={getRouteMain().route}
			/>
			<VStack
				className={style.content}
				align={"center"}
				justify={"center"}
			>
				<VStack
					gap={"S"}
					align={"center"}
				>
					<Text
						title={"Такой страницы нет."}
						fontWeightTitle={"ultra-fat"}
						colorTitle={"error"}
						fontSizeTitle={"xl"}
					/>
					<Button
						theme={"defaultDark"}
						height={"m"}
						width={"m"}
						onClick={onNavigateHandler}
					>
						На главную.
					</Button>
				</VStack>
			</VStack>
			<Footer pagePath={getRouteMain().route} />
		</Page>
	)
})

export default NotFoundPage
