import { getRouteMain } from "@config/router"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../../Button"
import { VStack } from "../../../Stack"
import { Text } from "../../../Text"
import styles from "./ErrorScreen.module.scss"

type ErrorScreenProps = {
	className?: string
	linkTo?: string
	text?: string
	title?: string
	type?: "link" | "reload"
} & testingProps

export const ErrorScreen = TypedMemo((props: ErrorScreenProps) => {
	const { className, linkTo, text, title, type = "link" } = props
	const navigate = useNavigate()

	const onClickHandler = useCallback(() => {
		if (type === "link") {
			navigate(linkTo || getRouteMain().route)
		} else {
			location.reload()
		}
	}, [linkTo, navigate, type])

	return (
		<VStack
			gap={"L"}
			align={"center"}
			justify={"center"}
			className={classNamesHelp(styles.ErrorScreen, undefined, [className])}
		>
			<Text
				TitleType={"h1"}
				colorTitle={"error"}
				align={"center"}
				fontSizeTitle={"xl"}
				title={type === "reload" ? "Произошла ошибка. Извините." : title || "Нет данных."}
			/>
			<Button
				width={"m"}
				height={"m"}
				onClick={onClickHandler}
				fontWeight={"ultra-fat"}
				fontSize={"m"}
				theme={"defaultDark"}
			>
				{type === "reload" ? "Перезагрузить страницу" : text || "На главную"}
			</Button>
		</VStack>
	)
})
