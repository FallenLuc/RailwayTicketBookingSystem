import styles from "./Reviews.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Text } from "@ui/Text"
import { getRouteNameReviews } from "@config/router/helpers/getterRoutesNames.helper"
import { ContainerLayout } from "@ui/layout"
import { VStack } from "@ui/Stack"
import { ReviewsSlider } from "../ReviewsSlider/ReviewsSlider"
import { getRouteMainReviews } from "@config/router"

type ReviewsProps = {
	className?: string
}
export const Reviews = memo<ReviewsProps>(props => {
	const { className } = props

	return (
		<section
			className={classNamesHelp(styles.Reviews, {}, [className])}
			id={getRouteMainReviews().hash}
		>
			<ContainerLayout>
				<VStack
					gap={"gapXL"}
					widthMax={true}
				>
					<Text
						title={getRouteNameReviews()}
						fontSizeTitle={"l"}
						fontWeightTitle={"fat"}
						colorTitle={"main-dark"}
						classNameTitle={styles.title}
					/>
					<ReviewsSlider />
				</VStack>
			</ContainerLayout>
		</section>
	)
})
