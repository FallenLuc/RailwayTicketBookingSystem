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
	typeBackground: "main" | "search" | "end"
	pagePath: string
} & PropsWithChildren
export const Header = TypedMemo((props: HeaderProps) => {
	const { className, typeBackground = "main", children, pagePath } = props

	return (
		<VStack
			id={getRouteHeader(pagePath).hash}
			TagType={"header"}
			className={classNamesHelp(styles.Header, {}, [className, styles[typeBackground]])}
		>
			<HeaderLogo />
			<NavLinks />
			<HeaderContent>{children}</HeaderContent>
			<HeaderBackground typeBackground={typeBackground} />
		</VStack>
	)
})
