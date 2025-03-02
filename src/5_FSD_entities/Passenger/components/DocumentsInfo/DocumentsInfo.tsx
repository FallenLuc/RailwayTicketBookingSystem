import type { testingProps } from "@customTypes/testing.types"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { Input } from "@ui/Input"
import { HStack } from "@ui/Stack"
import type { passengerDataType } from "../../types/passengerData.type"
import generalStyles from "../styles/Passenger.module.scss"
import styles from "./DocumentsInfo.module.scss"

type DocumentsInfoProps = {
	className?: string
	value: passengerDataType
	onChangeHandlerSeriesPassport: (value: string) => void
	onChangeHandlerNumberPassport: (value: string) => void
} & testingProps

export const DocumentsInfo = TypedMemo((props: DocumentsInfoProps) => {
	const { className, value, onChangeHandlerSeriesPassport, onChangeHandlerNumberPassport } = props

	return (
		<HStack
			className={classNamesHelp(styles.documentsInfo, undefined, [className])}
			gap={"M"}
		>
			<Input
				className={generalStyles.input}
				label={"Серия паспорта"}
				value={value.seriesPassport?.toString() || ""}
				classNamesLabel={generalStyles.label}
				onChange={onChangeHandlerSeriesPassport}
				height={"s"}
			/>

			<Input
				className={generalStyles.input}
				label={"Номер паспорта"}
				value={value.numberPassport?.toString() || ""}
				classNamesLabel={generalStyles.label}
				onChange={onChangeHandlerNumberPassport}
				height={"s"}
			/>
		</HStack>
	)
})
