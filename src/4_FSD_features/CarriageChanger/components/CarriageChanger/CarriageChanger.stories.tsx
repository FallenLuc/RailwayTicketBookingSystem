import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { carriageDataFromServerMock } from "@entities/Carriage/lib/mocks/carriageData.mock"
import { type Meta, type StoryObj } from "@storybook/react"
import { CarriageChanger } from "./CarriageChanger"

const meta: Meta<typeof CarriageChanger> = {
	title: "features/CarriageChanger",
	component: CarriageChanger,
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"isTestLoading",
				"data",
				"onClick"
			]
		}
	},
	decorators: [RestrictionDecorator("large"), CenterDecorator]
}

type TypeStory = StoryObj<typeof CarriageChanger>

export const Default: TypeStory = {
	args: {
		data: [carriageDataFromServerMock({ _id: "1" }), carriageDataFromServerMock({ _id: "2" })],
		activeId: "2"
	}
}

export default meta
