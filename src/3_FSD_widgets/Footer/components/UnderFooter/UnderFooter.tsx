import styles from "./UnderFooter.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { memo, useMemo } from "react"
import { Logo } from "@ui/Logo"
import { AppLink } from "@ui/AppLink"
import { getRouteMainHeader } from "@config/router"
import { ArrowUpIcon } from "@assets/index"
import { Text } from "@ui/Text"

type UnderFooterProps = {
	className?: string
}
export const UnderFooter = memo<UnderFooterProps>(props => {
	const { className } = props

	const year = useMemo(() => new Date().getFullYear(), [])

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
						to={getRouteMainHeader().route}
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
