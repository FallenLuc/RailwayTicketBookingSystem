import { memo, useMemo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack, HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { AppLink } from "@ui/AppLink"
import { YouTubeIcon, LinkedinIcon, GoogleIcon, FacebookIcon, TwitterIcon } from "@assets/index"
import {
	YOUTUBE_LINK,
	LINKEDIN_LINK,
	GOOGLE_LINK,
	FACEBOOK_LINK,
	TWITTER_LINK
} from "@constants/links.constant"
import styles from "./SocialSubscription.module.scss"

type SocialSubscriptionProps = {
	className?: string
}
export const SocialSubscription = memo<SocialSubscriptionProps>(props => {
	const { className } = props

	const style = useMemo(
		() => ({
			width: "15px",
			minWidth: "auto"
		}),
		[]
	)
	return (
		<VStack
			className={classNamesHelp("", {}, [className])}
			gap={"gapL"}
		>
			<Text
				TitleType={"h3"}
				title={"Подписывайтесь на нас"}
				colorTitle={"light-gray"}
				fontSizeTitle={"l"}
				fontWeightTitle={"fat"}
			/>
			<HStack
				align={"center"}
				gap={"gapL"}
				TagType={"ul"}
			>
				<li>
					<AppLink
						color={"light-gray"}
						to={YOUTUBE_LINK}
						className={styles.link}
						colorHover={"gold"}
					>
						<YouTubeIcon className={styles.icon} />
					</AppLink>
				</li>
				<li>
					<AppLink
						color={"light-gray"}
						to={LINKEDIN_LINK}
						className={styles.link}
						colorHover={"gold"}
					>
						<LinkedinIcon className={styles.icon} />
					</AppLink>
				</li>
				<li>
					<AppLink
						color={"light-gray"}
						to={GOOGLE_LINK}
						className={styles.link}
						colorHover={"gold"}
					>
						<GoogleIcon className={styles.icon} />
					</AppLink>
				</li>
				<li>
					<AppLink
						color={"light-gray"}
						to={FACEBOOK_LINK}
						className={styles.link}
						colorHover={"gold"}
						style={style}
					>
						<FacebookIcon
							className={styles.icon}
							style={style}
						/>
					</AppLink>
				</li>
				<li>
					<AppLink
						color={"light-gray"}
						to={TWITTER_LINK}
						className={styles.link}
						colorHover={"gold"}
					>
						<TwitterIcon className={styles.icon} />
					</AppLink>
				</li>
			</HStack>
		</VStack>
	)
})
