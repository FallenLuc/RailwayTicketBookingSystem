import { getRouteContacts } from "@config/router"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { createQueryParams } from "@helpers/addQueryParams/addQueryParams.helper"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { ContainerLayout } from "@ui/layout"
import { HStack, VStack } from "@ui/Stack"
import { useMemo } from "react"
import { Contacts } from "../Contacts/Contacts"
import { FooterSubscription } from "../FooterSubscription/FooterSubscription"
import { SocialSubscription } from "../SocialSubscription/SocialSubscription"
import { UnderFooter } from "../UnderFooter/UnderFooter"
import styles from "./Footer.module.scss"

type FooterProps = {
	className?: string
	pagePath: string
}
export const Footer = TypedMemo((props: FooterProps) => {
	const { className, pagePath } = props

	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()
	const currentDirection = useGetCurrentDirectionInfoSelector()

	const params = useMemo(() => {
		if (!currentDirection?._id) {
			return createQueryParams(formParametres)
		}
		return createQueryParams({ ...formParametres, directionId: currentDirection._id })
	}, [currentDirection?._id, formParametres])

	return (
		<VStack
			TagType={"footer"}
			className={classNamesHelp(styles.Footer, {}, [className])}
			id={getRouteContacts(pagePath).hash}
		>
			<ContainerLayout>
				<HStack
					align={"flexStart"}
					justify={"spaceBetween"}
					className={styles.content}
				>
					<Contacts />
					<VStack
						gap={"L"}
						className={styles.footerSubscriptionWrapper}
					>
						<FooterSubscription />
						<SocialSubscription />
					</VStack>
				</HStack>
			</ContainerLayout>

			<UnderFooter
				pagePath={pagePath}
				params={params}
			/>
		</VStack>
	)
})
