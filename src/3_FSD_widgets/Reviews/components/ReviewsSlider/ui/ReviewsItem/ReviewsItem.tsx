import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { AppImage } from "@ui/AppImage"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo, useMemo } from "react"
import styles from "./ReviewsItem.module.scss"

type ReviewsItemProps = {
	className?: string
	title: string
	text: string
	imageUrl: string
}
export const ReviewsItem = memo<ReviewsItemProps>(props => {
	const { className, text, imageUrl, title } = props

	const avatarFallback = useMemo(
		() => <div className={classNamesHelp(styles.avatar, {}, [styles.avatarFallback])}></div>,
		[]
	)

	return (
		<HStack
			role={"listitem"}
			gap={"L"}
			align={"center"}
			className={classNamesHelp("", {}, [className])}
			widthMax={true}
		>
			<AppImage
				fallback={avatarFallback}
				errorFallback={avatarFallback}
				src={imageUrl}
				className={styles.avatar}
			/>
			<VStack
				gap={"M"}
				className={styles.wrapperText}
				widthMax={true}
			>
				<Text
					title={title}
					fontSizeTitle={"m"}
					colorTitle={"main-dark"}
					fontWeightTitle={"fat"}
				/>
				<Text
					text={text}
					fontSizeText={"s"}
					colorText={"main-gray"}
					fontWeightText={"think"}
					classNamesText={styles.text}
				/>
			</VStack>
		</HStack>
	)
})
