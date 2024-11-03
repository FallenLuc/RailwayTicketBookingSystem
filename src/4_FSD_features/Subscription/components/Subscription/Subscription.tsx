import { memo, useCallback } from "react"
import { SubscriptionForm } from "../SubscriptionForm/SubscriptionForm"

type SubscriptionProps = {
	className?: string
}
export const Subscription = memo<SubscriptionProps>(props => {
	const { className } = props

	const onSendHandler = useCallback((email: string) => {
		console.log(email)
	}, [])

	return (
		<SubscriptionForm
			onSend={onSendHandler}
			className={className}
		/>
	)
})
