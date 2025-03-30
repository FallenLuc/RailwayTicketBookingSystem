import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { CarriageSeatsMap } from "./CarriageSeatsMap"

const meta: Meta<typeof CarriageSeatsMap> = {
	title: "features/CarriageSeatsMap",
	component: CarriageSeatsMap,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"data",
				"onChange",
				"currentValue",
				"isTestLoading"
			]
		}
	},
	decorators: [CenterDecorator, RestrictionDecorator()]
}

type TypeStory = StoryObj<typeof CarriageSeatsMap>

export const Default: TypeStory = {
	args: {
		data: [
			{ index: 1, available: true },
			{ index: 2, available: true },
			{ index: 3, available: true }
		]
	}
}

export default meta
