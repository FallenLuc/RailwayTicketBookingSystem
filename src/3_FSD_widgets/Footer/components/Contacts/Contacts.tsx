import { LocationIcon, MailIcon, PhoneIcon, SkypeIcon } from "@assets/index"
import {
	CONTACT_LOCATION_LINK,
	CONTACT_LOCATION_TEXT,
	CONTACT_MAIL_LINK,
	CONTACT_MAIL_TEXT,
	CONTACT_PHONE_LINK,
	CONTACT_PHONE_TEXT,
	CONTACT_SKYPE_LINK,
	CONTACT_SKYPE_TEXT
} from "@constants/links.constant"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { memo } from "react"
import styles from "./Contacts.module.scss"
import { ContactLink } from "./ui/ContactLink/ContactLink"

type ContactsProps = {
	className?: string
}
export const Contacts = memo<ContactsProps>(props => {
	const { className } = props

	return (
		<VStack
			className={classNamesHelp(styles.Contacts, {}, [className])}
			gap={"L"}
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
				gap={"M"}
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
