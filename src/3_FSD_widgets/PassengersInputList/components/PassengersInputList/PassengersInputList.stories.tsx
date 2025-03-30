import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { passengerDataMock } from "@entities/Passenger"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { PassengersInputList } from "./PassengersInputList"

const meta: Meta<typeof PassengersInputList> = {
	title: "widgets/PassengersInputList",
	component: PassengersInputList,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "isTestLoading"]
		}
	},
	decorators: [RestrictionDecorator("large"), CenterDecorator]
}

type TypeStory = StoryObj<typeof PassengersInputList>

const state: DeepPartial<mainStateMap> = {
	currentDirection: {
		seatsInfo: 2
	},
	formPassengers: {
		ids: ["1", "2"],
		entities: {
			"1": passengerDataMock({ id: "1" }),
			"2": passengerDataMock({ id: "2" })
		}
	}
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}

export default meta
