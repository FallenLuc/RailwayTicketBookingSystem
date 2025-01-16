import { getRouteHeader } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import type { PropsWithChildren } from "react"
import { HeaderBackground } from "../HeaderBackground/HeaderBackground"
import { HeaderContent } from "../HeaderContent/HeaderContent"
import { HeaderLogo } from "../HeaderLogo/HeaderLogo"
import { NavLinks } from "../NavLinks/NavLinks"
import styles from "./Header.module.scss"

type HeaderProps = {
	className?: string
	backgroundType: "main" | "search" | "end"
	pagePath: string
} & PropsWithChildren
export const Header = TypedMemo((props: HeaderProps) => {
	const { className, backgroundType = "main", children, pagePath } = props

	return (
		<VStack
			className={classNamesHelp(styles.Header, {}, [className, styles[backgroundType]])}
			TagType={"header"}
			id={getRouteHeader(pagePath).hash}
		>
			<HeaderLogo />
			<NavLinks />
			<HeaderContent>{children}</HeaderContent>
			<HeaderBackground typeBackground={backgroundType} />
		</VStack>
	)
})
