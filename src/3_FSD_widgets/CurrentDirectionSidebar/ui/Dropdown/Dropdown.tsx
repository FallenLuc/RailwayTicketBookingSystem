import { MinusButtonIcon, PlusButtonIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import type { FC, PropsWithChildren, SVGProps } from "react"
import { useCallback, useState } from "react"
import generalStyles from "../../Styles/general.module.scss"
import styles from "./Dropdown.module.scss"

type DropdownProps = {
	className?: string
	Icon: FC<SVGProps<SVGSVGElement>>
	title: string
	additionalTitle?: string
} & testingProps &
	PropsWithChildren

export const Dropdown = TypedMemo((props: DropdownProps) => {
	const { className, additionalTitle, title, Icon, children } = props

	const [isOpen, setIsOpen] = useState(true)

	const onToggleHandler = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	return (
		<VStack
			className={classNamesHelp(styles.Dropdown, {}, [className, generalStyles.paddings])}
			gap={"L"}
		>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
			>
				<HStack
					widthMax={false}
					gap={"S"}
					align={"center"}
				>
					<Icon className={styles.icon} />
					<HStack
						widthMax={false}
						align={"flexEnd"}
						gap={"S"}
					>
						<Text
							title={title}
							fontSizeTitle={"l"}
							colorTitle={"main-light"}
							fontWeightTitle={"ultra-fat"}
						/>
						{additionalTitle && (
							<Text
								text={additionalTitle}
								fontSizeText={"s"}
								fontWeightText={"medium"}
								colorText={"light-gray"}
							/>
						)}
					</HStack>
				</HStack>
				<Button
					theme={"clear"}
					onClick={onToggleHandler}
				>
					{isOpen ?
						<MinusButtonIcon className={styles.iconButton} />
					:	<PlusButtonIcon
							className={classNamesHelp(styles.iconButton, undefined, [
								styles.activeIcon
							])}
						/>
					}
				</Button>
			</HStack>
			{isOpen && children}
		</VStack>
	)
})
