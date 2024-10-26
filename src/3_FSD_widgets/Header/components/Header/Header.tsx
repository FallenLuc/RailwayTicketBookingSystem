import styles from "./Header.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { LogoIcon, BackgroundMainPageImage, TitleIcon } from "@assets/index"
import { AppLink } from "@ui/AppLink"
import { ContainerLayout } from "@ui/layout"
import { HStack, VStack } from "@ui/Stack"
import { AppImage } from "@ui/AppImage"

type HeaderProps = {
	className?: string
}
export const Header = memo<HeaderProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp(styles.Header, {}, [className])}>
			<HStack
				widthMax
				align={"center"}
				className={styles.logoOverly}
			>
				<ContainerLayout>
					<LogoIcon className={styles.logo} />
				</ContainerLayout>
			</HStack>

			<HStack
				align={"center"}
				widthMax
				className={styles.listLinks}
			>
				<ContainerLayout>
					<AppLink // To Feature Вынести в отдельный компонент routing
						to={"/"}
						fontsize="l"
						color={"main-light"}
						fontWeight={"think"}
					>
						{"О Нас"}
					</AppLink>
				</ContainerLayout>
			</HStack>
			<VStack // To Feature сделать фичу поиска
				className={styles.content}
				justify={"flexEnd"}
				widthMax={true}
			>
				<ContainerLayout>
					<HStack
						align={"center"}
						justify={"flexEnd"}
					>
						<TitleIcon className={styles.title} />
						<div className={styles.fallbackSearch}></div>
					</HStack>
				</ContainerLayout>
			</VStack>
			<AppImage
				src={BackgroundMainPageImage}
				className={styles.background} // To Feature сделать fallback, протестировать нужен ли тут fallback
			/>
		</div>
	)
})
