import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SugarLine } from "./SugarLine"

const meta: Meta<typeof SugarLine> = {
	title: "features/SugarLine",
	component: SugarLine,
	argTypes: {
		stage: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof SugarLine>

export const Default: TypeStory = {
	args: {
		stage: "tickets"
	}
}
