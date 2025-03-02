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
	onChange?: <T extends keyof passengerDataType>(
		typeChange: T,
		value: passengerDataType[T]
	) => void
} & testingProps

export const PassengerInputCard = TypedMemo((props: PassengerInputCardProps) => {
	const { className, count = 1, onChange, value } = props

	const [isOpen, setIsOpen] = useState(false)

	const onOpenHandler = useCallback(() => {
		setIsOpen(prev => !prev)
	}, [])

	const onChangeHandlerSurName = useCallback(
		(value: string) => {
			onChange?.("surname", value)
		},
		[onChange]
	)

	const onChangeHandlerFirstName = useCallback(
		(value: string) => {
			onChange?.("firstName", value)
		},
		[onChange]
	)

	const onChangeHandlerLastName = useCallback(
		(value: string) => {
			onChange?.("lastName", value)
		},
		[onChange]
	)

	const onChangeHandlerSex = useCallback(
		(value: sexType) => {
			onChange?.("sex", value)
		},
		[onChange]
	)

	const onChangeHandlerDateBirth = useCallback(
		(value: string) => {
			onChange?.("dateBirth", value)
		},
		[onChange]
	)

	const onChangeHandlerIsLimitedMobility = useCallback(
		(value: boolean) => {
			onChange?.("isLimitedMobility", value)
		},
		[onChange]
	)
	const onChangeHandlerSeriesPassport = useCallback(
		(value: string) => {
			onChange?.("seriesPassport", value)
		},
		[onChange]
	)
	const onChangeHandlerNumberPassport = useCallback(
		(value: string) => {
			onChange?.("numberPassport", value)
		},
		[onChange]
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
