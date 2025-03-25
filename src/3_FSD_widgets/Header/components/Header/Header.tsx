import { getRouteHeader } from "@config/router"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { createQueryParams } from "@helpers/addQueryParams/addQueryParams.helper"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import type { PropsWithChildren } from "react"
import { useMemo } from "react"
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

	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const currentDirection = useGetCurrentDirectionInfoSelector()

	const params = useMemo(() => {
		if (!currentDirection?._id) {
			return createQueryParams(formParametres)
		}
		return createQueryParams({ ...formParametres, directionId: currentDirection._id })
	}, [currentDirection?._id, formParametres])

	return (
		<VStack
			className={classNamesHelp(styles.Header, {}, [className, styles[backgroundType]])}
			TagType={"header"}
			id={getRouteHeader(pagePath).hash}
		>
			<HeaderLogo />
			<NavLinks
				pagePath={pagePath}
				params={params}
			/>
			<HeaderContent>{children}</HeaderContent>
			<HeaderBackground typeBackground={backgroundType} />
		</VStack>
	)
})
