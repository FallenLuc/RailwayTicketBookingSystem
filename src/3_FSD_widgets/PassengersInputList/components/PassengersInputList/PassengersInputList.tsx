import type { sexType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import type { fieldPassengerDataWithValidationType, passengerDataType } from "@entities/Passenger"
import { PassengerInputCard } from "@entities/Passenger"
import {
	useFormPassengersActions,
	useGetFormPassengersDataSelector
} from "@features/FillingFormPassengers"

import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"

type PassengersInputListProps = {
	className?: string
} & testingProps

export const PassengersInputList = TypedMemo((props: PassengersInputListProps) => {
	const { className } = props

	const { setPassengersInfo } = useFormPassengersActions()

	const passengers = useGetFormPassengersDataSelector()

	const onChangeFormHandler = <T extends keyof passengerDataType>(
		id: string,
		typeChange: T,
		value: passengerDataType[T]
	) => {
		switch (typeChange) {
			case "surname":
				setPassengersInfo({ id, surname: value as fieldPassengerDataWithValidationType })
				break
			case "firstName":
				setPassengersInfo({ id, firstName: value as fieldPassengerDataWithValidationType })
				break
			case "lastName":
				setPassengersInfo({ id, lastName: value as fieldPassengerDataWithValidationType })
				break
			case "dateBirth":
				setPassengersInfo({ id, dateBirth: value as fieldPassengerDataWithValidationType })
				break
			case "isLimitedMobility":
				setPassengersInfo({ id, isLimitedMobility: value as boolean })
				break
			case "sex":
				setPassengersInfo({ id, sex: value as sexType })
				break
			case "numberPassport":
				setPassengersInfo({
					id,
					numberPassport: value as fieldPassengerDataWithValidationType
				})
				break
			case "seriesPassport":
				setPassengersInfo({
					id,
					seriesPassport: value as fieldPassengerDataWithValidationType
				})
				break
		}
	}

	return (
		<VStack
			className={classNamesHelp(undefined, undefined, [className])}
			gap={"L"}
		>
			{passengers?.map((passenger, i) => (
				<PassengerInputCard
					key={passenger.id}
					count={i + 1}
					value={passenger}
					id={passenger.id}
					onChange={onChangeFormHandler}
				/>
			))}
		</VStack>
	)
})
