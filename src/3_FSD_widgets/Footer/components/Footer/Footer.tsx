import styles from "./Footer.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { UnderFooter } from "../UnderFooter/UnderFooter"
import { HStack, VStack } from "@ui/Stack"
import { FooterSubscription } from "../FooterSubscription/FooterSubscription"
import { Contacts } from "../Contacts/Contacts"
import { ContainerLayout } from "@ui/layout"
import { SocialSubscription } from "../SocialSubscription/SocialSubscription"
import { getRouteMainContacts } from "@config/router"

type FooterProps = {
	className?: string
}
export const Footer = memo<FooterProps>(props => {
	const { className } = props

	return (
		<footer
			className={classNamesHelp(styles.Footer, {}, [className])}
			id={getRouteMainContacts().hash}
		>
			<ContainerLayout>
				<HStack
					align={"flexStart"}
					justify={"spaceBetween"}
					className={styles.content}
				>
					<Contacts />
					<VStack
						gap={"gapL"}
						className={styles.footerSubscriptionWrapper}
					>
						<FooterSubscription />
						<SocialSubscription />
					</VStack>
				</HStack>
			</ContainerLayout>

			<UnderFooter />
		</footer>
	)
})
