import type { testingProps } from "@customTypes/testing.types"
import { useGetClientDataInfoSelector } from "@features/FillingFormClientData"
import { useGetCurrentDirectionSumSelector } from "@features/FillingFormCurrentDirection"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Button } from "@ui/Button"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { Content } from "../Content/Content"
import { Header } from "../Header/Header"
import { StepsList } from "../StepsList/StepsList"
import styles from "./SuccessModal.module.scss"

type SuccessModalProps = {
	className?: string
} & testingProps

export const SuccessModal = TypedMemo((props: SuccessModalProps) => {
	const { className } = props

	const sum = useGetCurrentDirectionSumSelector()
	const client = useGetClientDataInfoSelector()

	const lastName = client?.lastName.value
	const firstName = client?.firstName.value

	const navigate = useNavigate()

	const onClickHandler = useCallback(() => {
		navigate("/")
	}, [navigate])

	return (
		<VStack className={classNamesHelp(styles.SuccessModal, {}, [className])}>
			<Text
				title={"Благодарим Вас за заказ!"}
				className={styles.title}
				classNameTitle={styles.fzTitle}
				TitleType={"h1"}
				fontWeightTitle={"ultra-fat"}
				colorTitle={"main-light"}
			/>
			<Header sum={sum} />
			<StepsList />
			<Content name={`${firstName}${lastName ? ` ${lastName}` : lastName}!`} />
			<HStack
				className={styles.footerModal}
				align={"center"}
				justify={"flexEnd"}
			>
				<Button
					onClick={onClickHandler}
					theme={"clear"}
					className={styles.button}
				>
					Вернуться на главную
				</Button>
			</HStack>
		</VStack>
	)
})
