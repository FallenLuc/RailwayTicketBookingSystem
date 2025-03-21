import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { PayMethod } from "./PayMethod"

const meta: Meta<typeof PayMethod> = {
	title: "entities/Client/PayMethod",
	component: PayMethod,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [RestrictionDecorator("default"), CenterDecorator]
}

type TypeStory = StoryObj<typeof PayMethod>

export const Default: TypeStory = {
	args: {}
}

export default meta
