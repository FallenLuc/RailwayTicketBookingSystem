import styles from "./HowItWorks.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { Advantages } from "../Advantages/Advantages"
import { HeaderHowItWorks } from "../HeaderHowItWorks/HeaderHowItWorks"
import { Background } from "@ui/Background"
import { BackgroundHowItWorks } from "@assets/index"
import { getRouteMainHowItWorks } from "@config/router"

type HowItWorksProps = {
	className?: string
}
export const HowItWorks = memo<HowItWorksProps>(props => {
	const { className } = props

	return (
		<section
			className={classNamesHelp(styles.HowItWorks, {}, [className])}
			id={getRouteMainHowItWorks().hash}
		>
			<ContainerLayout>
				<VStack gap={"gapXL"}>
					<HeaderHowItWorks />
					<Advantages />
				</VStack>
			</ContainerLayout>
			<Background background={BackgroundHowItWorks} />
		</section>
	)
})
