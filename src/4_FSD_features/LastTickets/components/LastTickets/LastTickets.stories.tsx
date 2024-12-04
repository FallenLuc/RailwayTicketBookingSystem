import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { LastTickets } from "./LastTickets"

const meta: Meta<typeof LastTickets> = {
	title: "features/LastTickets",
	component: LastTickets,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [RestrictionDecorator, CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof LastTickets>

export const Default: TypeStory = {
	args: {}
}
