import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { passengerListDataMock } from "../../lib/mocks/passengersListData.mock"
import { PassengersList } from "./PassengersList"

const meta: Meta<typeof PassengersList> = {
	title: "entities/PassengersList",
	component: PassengersList,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"passengers",
				"onClick",
				"isTestLoading"
			]
		}
	},
	decorators: [CenterDecorator, RestrictionDecorator("large")]
}

type TypeStory = StoryObj<typeof PassengersList>

export const Default: TypeStory = {
	args: {
		passengers: passengerListDataMock(3)
	}
}

export default meta
