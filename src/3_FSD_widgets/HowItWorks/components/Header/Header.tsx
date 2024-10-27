import { memo } from "react"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { getRouteNameHowItWorks } from "@config/router/helpers/getterRoutesNames.helper"
import { AppLink } from "@ui/AppLink"
import styles from "./Header.module.scss"

type HeaderProps = {
	className?: string
}
export const Header = memo<HeaderProps>(props => {
	const { className } = props

	return (
		<HStack
			justify={"spaceBetween"}
			align={"center"}
			className={className}
		>
			<Text
				title={getRouteNameHowItWorks()}
				colorTitle={"main-light"}
				fontWeightTitle={"fat"}
				fontSizeText={"l"}
				classNameTitle={styles.title}
			/>
			<AppLink
				fontWeight={"ultra-fat"}
				fontsize={"m"}
				color={"main-light"}
				to={
					"https://github.com/DnD-developer/RailwayTicketBookingSystem/tree/MainPage/layoutMainPageOnComponent-DND-581"
				}
				target={"_blank"}
				className={styles.link}
			>
				{"Узнать больше"}
			</AppLink>
		</HStack>
	)
})
