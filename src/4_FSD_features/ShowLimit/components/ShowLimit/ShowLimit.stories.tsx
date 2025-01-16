import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ShowLimit } from "./ShowLimit"

const meta: Meta<typeof ShowLimit> = {
	title: "features/ShowLimit",
	component: ShowLimit,
	argTypes: {
		value: {
			control: "inline-radio"
		}
	},
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "onChange"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ShowLimit>

export const Default: TypeStory = {
	args: {
		value: 5
	}
}
