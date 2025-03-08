import type { sexType } from "@customTypes/common.types"
import type { testingProps } from "@customTypes/testing.types"
import type { passengerDataType } from "@entities/Passenger"
import { PassengerInputCard } from "@entities/Passenger/components/PassengerInputCard/PassengerInputCard"
import { useCurrentDirectionActions } from "@features/FillingFormCurrentDirection"
import { useGetCurrentDirectionPassengersSelector } from "@features/FillingFormCurrentDirection/store/selectors/getCurrentDirectionProperties/getCurrentDirectionProperties.selector"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { TypedMemo } from "@sharedProviders/TypedMemo"
import { VStack } from "@ui/Stack"

type PassengersListProps = {
	className?: string
} & testingProps

export const PassengersList = TypedMemo((props: PassengersListProps) => {
	const { className } = props

	const { setPassengersInfo } = useCurrentDirectionActions()

	const passengers = useGetCurrentDirectionPassengersSelector()

	const onChangeFormHandler = <T extends keyof passengerDataType>(
		id: string,
		typeChange: T,
		value: passengerDataType[T]
	) => {
		switch (typeChange) {
			case "surname":
				setPassengersInfo({ id, surname: value as string })
				break
			case "firstName":
				setPassengersInfo({ id, firstName: value as string })
				break
			case "lastName":
				setPassengersInfo({ id, lastName: value as string })
				break
			case "dateBirth":
				setPassengersInfo({ id, dateBirth: value as string })
				break
			case "isLimitedMobility":
				setPassengersInfo({ id, isLimitedMobility: value as boolean })
				break
			case "sex":
				setPassengersInfo({ id, sex: value as sexType })
				break
			case "numberPassport":
				setPassengersInfo({ id, numberPassport: value as string })
				break
			case "seriesPassport":
				setPassengersInfo({ id, seriesPassport: value as string })
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
