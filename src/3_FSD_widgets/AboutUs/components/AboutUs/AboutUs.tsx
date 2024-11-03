import styles from "./AboutUs.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { ContainerLayout } from "@ui/layout"
import { Text } from "@ui/Text"
import { getRouteNameAboutUs } from "@config/router/helpers/getterRoutesNames.helper"
import { memo } from "react"
import { VStack } from "@ui/Stack"
import { getRouteMainAboutUs } from "@config/router"

type AboutUsProps = {
	className?: string
}
export const AboutUs = memo<AboutUsProps>(props => {
	const { className } = props

	return (
		<section
			className={classNamesHelp(styles.AboutUs, {}, [className])}
			id={getRouteMainAboutUs().hash}
		>
			<ContainerLayout>
				<VStack
					widthMax={true}
					gap={"gapXL"}
				>
					<Text
						classNameTitle={styles.title}
						title={getRouteNameAboutUs()}
						TitleType={"h2"}
						colorTitle={"main-dark"}
						fontSizeTitle={"l"}
						fontWeightTitle={"fat"}
					/>
					<VStack
						gap={"gapM"}
						className={styles.textArea}
					>
						<Text
							text={
								"Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет."
							}
							fontSizeText={"m"}
							colorText={"main-dark"}
							fontWeightText={"medium"}
						/>
						<Text
							text={
								"Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет."
							}
							fontSizeText={"m"}
							colorText={"main-dark"}
							fontWeightText={"medium"}
						/>
						<Text
							text={
								"Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая."
							}
							fontSizeText={"m"}
							colorText={"main-dark"}
							fontWeightText={"ultra-fat"}
						/>
					</VStack>
				</VStack>
			</ContainerLayout>
		</section>
	)
})
