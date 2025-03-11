import { MinusButtonIcon, PlusButtonIcon } from "@assets/index"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import styles from "./Header.module.scss"

type HeaderProps = {
	className?: string
	onOpenHandler: () => void
	isOpen: boolean
	count?: number
} & testingProps

export const Header = TypedMemo((props: HeaderProps) => {
	const { className, isOpen = false, onOpenHandler, count = 1 } = props

	return (
		<HStack
			className={classNamesHelp(styles.Header, undefined, [className])}
			align={"center"}
			gap={"XS"}
		>
			<Button
				theme={"clear"}
				onClick={onOpenHandler}
			>
				{isOpen ?
					<MinusButtonIcon
						className={classNamesHelp(styles.icon, undefined, [styles.iconMinus])}
					/>
				:	<PlusButtonIcon
						className={classNamesHelp(styles.icon, undefined, [styles.iconPlus])}
					/>
				}
			</Button>
			<Text
				className={styles.title}
				title={`Пассажир ${count}`}
				colorTitle={"main-dark"}
			/>
		</HStack>
	)
})
