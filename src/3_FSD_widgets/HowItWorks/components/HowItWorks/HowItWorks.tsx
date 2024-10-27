import styles from "./HowItWorks.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { Advantages } from "../Advantages/Advantages"
import { Background } from "../Background/Background"
import { Header } from "../Header/Header"

// To Feature Add Lazy

type HowItWorksProps = {
	className?: string
}
export const HowItWorks = memo<HowItWorksProps>(props => {
	const { className } = props

	return (
		<section className={classNamesHelp(styles.HowItWorks, {}, [className])}>
			<ContainerLayout>
				<VStack gap={"gapXL"}>
					<Header />
					<Advantages />
				</VStack>
			</ContainerLayout>
			<Background />
		</section>
	)
})
