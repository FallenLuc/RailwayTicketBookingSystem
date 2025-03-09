import type { sexType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"
import { useCallback, useState } from "react"
import type { passengerDataType } from "../../types/passengerData.type"
import { DocumentsInfo } from "../DocumentsInfo/DocumentsInfo"
import { Header } from "../Header/Header"
import { PassengerInfo } from "../PassengerInfo/PassengerInfo"
import styles from "./PassengerInputCard.module.scss"

type PassengerInputCardProps = {
	className?: string
	count: number
	value: passengerDataType
	id: string
	onChange?: <T extends keyof passengerDataType>(
		id: string,
		typeChange: T,
		value: passengerDataType[T]
	) => void
} & testingProps

export const PassengerInputCard = TypedMemo((props: PassengerInputCardProps) => {
	const { className, count = 1, onChange, value, id } = props

	const [isOpen, setIsOpen] = useState(count === 1)

	const onOpenHandler = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	const onChangeHandlerSurName = useCallback(
		(value: string) => {
			onChange?.(id, "surname", { isValid: true, value })
		},
		[id, onChange]
	)

	const onChangeHandlerFirstName = useCallback(
		(value: string) => {
			onChange?.(id, "firstName", { isValid: true, value })
		},
		[id, onChange]
	)

	const onChangeHandlerLastName = useCallback(
		(value: string) => {
			onChange?.(id, "lastName", { isValid: true, value })
		},
		[id, onChange]
	)

	const onChangeHandlerSex = useCallback(
		(value: sexType) => {
			onChange?.(id, "sex", value)
		},
		[id, onChange]
	)

	const onChangeHandlerDateBirth = useCallback(
		(value: string) => {
			onChange?.(id, "dateBirth", { isValid: true, value })
		},
		[id, onChange]
	)

	const onChangeHandlerIsLimitedMobility = useCallback(
		(value: boolean) => {
			onChange?.(id, "isLimitedMobility", value)
		},
		[id, onChange]
	)
	const onChangeHandlerSeriesPassport = useCallback(
		(value: string) => {
			onChange?.(id, "seriesPassport", { isValid: true, value })
		},
		[id, onChange]
	)
	const onChangeHandlerNumberPassport = useCallback(
		(value: string) => {
			onChange?.(id, "numberPassport", { isValid: true, value })
		},
		[id, onChange]
	)

	return (
		<VStack
			className={classNamesHelp(styles.PassengerInputCard, {}, [className])}
			TagType={"article"}
		>
			<Header
				onOpenHandler={onOpenHandler}
				isOpen={isOpen}
				count={count}
			/>
			{isOpen && (
				<VStack>
					<PassengerInfo
						value={value}
						onChangeHandlerSurName={onChangeHandlerSurName}
						onChangeHandlerFirstName={onChangeHandlerFirstName}
						onChangeHandlerLastName={onChangeHandlerLastName}
						onChangeHandlerDateBirth={onChangeHandlerDateBirth}
						onChangeHandlerIsLimitedMobility={onChangeHandlerIsLimitedMobility}
						onChangeHandlerSex={onChangeHandlerSex}
					/>
					<DocumentsInfo
						value={value}
						onChangeHandlerSeriesPassport={onChangeHandlerSeriesPassport}
						onChangeHandlerNumberPassport={onChangeHandlerNumberPassport}
					/>
				</VStack>
			)}
		</VStack>
	)
})
