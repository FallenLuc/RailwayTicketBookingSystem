import type { FC, SVGProps } from "react"
import { memo } from "react"
import styles from "./ContactLink.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HStack } from "@ui/Stack"
import { AppLink } from "@ui/AppLink"

type ContactLinkProps = {
	Icon: FC<SVGProps<SVGSVGElement>>
	link: string
	linkText: string
	className?: string
}
export const ContactLink = memo<ContactLinkProps>(props => {
	const { className, Icon, link, linkText } = props

	return (
		<HStack
			className={classNamesHelp("", {}, [className])}
			gap={"gapM"}
			align={"center"}
		>
			<AppLink
				to={link}
				className={styles.linkIcon}
			>
				<Icon className={styles.icon} />
			</AppLink>

			<AppLink
				to={link}
				color={"light-gray"}
				fontsize={"m"}
				fontWeight={"think"}
			>
				{linkText}
			</AppLink>
		</HStack>
	)
})
