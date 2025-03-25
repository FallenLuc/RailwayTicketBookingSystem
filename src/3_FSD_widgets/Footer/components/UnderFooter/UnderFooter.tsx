import { ArrowUpIcon } from "@assets/index"
import { getRouteHeader } from "@config/router"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppLink } from "@ui/AppLink"
import { ContainerLayout } from "@ui/layout"
import { Logo } from "@ui/Logo"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo, useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import styles from "./UnderFooter.module.scss"

type UnderFooterProps = {
	className?: string
	pagePath: string
}
export const UnderFooter = memo<UnderFooterProps>(props => {
	const { className, pagePath } = props

	const year = useMemo(() => new Date().getFullYear(), [])

	const [searchParams] = useSearchParams()

	const params = searchParams.size ? `?${searchParams}` : ""

	return (
		<div className={classNamesHelp(styles.UnderFooter, {}, [className])}>
			<ContainerLayout>
				<HStack
					className={styles.wrapper}
					widthMax={true}
					align={"center"}
					justify={"spaceBetween"}
				>
					<Logo />
					<AppLink
						to={getRouteHeader(pagePath, params).route}
						className={styles.arrowUp}
						color={"light-gray"}
						colorHover={"gold"}
					>
						<ArrowUpIcon className={styles.icon} />
					</AppLink>
					<Text
						text={`${year} Web`}
						fontSizeText={"m"}
						fontWeightText={"think"}
						colorText={"light-gray"}
						className={styles.copyright}
					/>
				</HStack>
			</ContainerLayout>
		</div>
	)
})
