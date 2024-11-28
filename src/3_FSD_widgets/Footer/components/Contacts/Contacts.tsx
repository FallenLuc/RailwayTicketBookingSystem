import styles from "./Contacts.module.scss"
import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { ContactLink } from "./ui/ContactLink/ContactLink"
import { PhoneIcon, MailIcon, SkypeIcon, LocationIcon } from "@assets/index"
import {
	CONTACT_PHONE_LINK,
	CONTACT_PHONE_TEXT,
	CONTACT_MAIL_LINK,
	CONTACT_MAIL_TEXT,
	CONTACT_SKYPE_LINK,
	CONTACT_SKYPE_TEXT,
	CONTACT_LOCATION_LINK,
	CONTACT_LOCATION_TEXT
} from "@constants/links.constant"
import { Text } from "@ui/Text"

type ContactsProps = {
	className?: string
}
export const Contacts = memo<ContactsProps>(props => {
	const { className } = props

	return (
		<VStack
			className={classNamesHelp(styles.Contacts, {}, [className])}
			gap={"gapL"}
			widthMax={true}
		>
			<Text
				TitleType={"h3"}
				title={"Свяжитесь с нами"}
				colorTitle={"light-gray"}
				fontSizeTitle={"l"}
				fontWeightTitle={"fat"}
			/>
			<VStack
				gap={"gapM"}
				TagType={"ul"}
			>
				<ContactLink
					Icon={PhoneIcon}
					link={CONTACT_PHONE_LINK}
					linkText={CONTACT_PHONE_TEXT}
				/>
				<ContactLink
					Icon={MailIcon}
					link={CONTACT_MAIL_LINK}
					linkText={CONTACT_MAIL_TEXT}
				/>
				<ContactLink
					Icon={SkypeIcon}
					link={CONTACT_SKYPE_LINK}
					linkText={CONTACT_SKYPE_TEXT}
				/>
				<ContactLink
					Icon={LocationIcon}
					link={CONTACT_LOCATION_LINK}
					linkText={CONTACT_LOCATION_TEXT}
				/>
			</VStack>
		</VStack>
	)
})
