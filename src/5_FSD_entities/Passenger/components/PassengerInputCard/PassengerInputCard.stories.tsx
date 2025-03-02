import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { passengerDataMock } from "../../lib/mocks/passengerData.mock"
import { PassengerInputCard } from "./PassengerInputCard"

const meta: Meta<typeof PassengerInputCard> = {
	title: "entities/PassengerInputCard",
	component: PassengerInputCard,
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"value",
				"count",
				"onChange",
				"isTestLoading"
			]
		},
		backgrounds: {
			default: "Light"
		}
	},
	decorators: [RestrictionDecorator("large"), CenterDecorator]
}

type TypeStory = StoryObj<typeof PassengerInputCard>

export const Default: TypeStory = {
	args: {
		value: passengerDataMock({ isLimitedMobility: true }),
		count: 1
	}
}

export default meta
