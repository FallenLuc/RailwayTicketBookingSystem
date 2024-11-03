import type { ReactNode } from "react"
import { memo, useCallback, useState, useEffect } from "react"
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm"
import { useToSubscribeMutation } from "../../api/toSubscribe/toSubscribeRtkq"
import { Modal } from "@ui/Modal"
import { FallbackLoader } from "@ui/FallbackLoader"
import { Text } from "@ui/Text"

type SubscriptionProps = {
	className?: string
}
export const Subscription = memo<SubscriptionProps>(props => {
	const { className } = props

	const [toSubscribe, response] = useToSubscribeMutation()

	const [modalIsOpen, setModalIsOpen] = useState(false)

	let content: ReactNode = <FallbackLoader />

	if (response.isError || (response.data && !response.data.status)) {
		content = (
			<Text
				title={"Не удалось подписаться"}
				colorTitle={"main-dark"}
			/>
		)
	}

	if (response.data?.status) {
		content = (
			<Text
				title={"Вы успешно подписаны"}
				colorTitle={"main-dark"}
			/>
		)
	}

	useEffect(() => {
		if (response.isLoading) {
			setModalIsOpen(true)
		}
	}, [response.isLoading])

	const onSendHandler = useCallback(
		(email: string) => {
			toSubscribe(email)
		},
		[toSubscribe]
	)

	const onCloseModalHandler = useCallback(() => {
		setModalIsOpen(false)
	}, [])

	return (
		<>
			<SubscriptionForm
				onSend={onSendHandler}
				className={className}
			/>
			{modalIsOpen && (
				<Modal
					lazy
					isOpen={modalIsOpen}
					onClose={onCloseModalHandler}
				>
					{content}
				</Modal>
			)}
		</>
	)
})
