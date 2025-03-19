import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AllData } from "./AllData"

const meta: Meta<typeof AllData> = {
	title: "widgets/AllData",
	component: AllData,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof AllData>

export const Default: TypeStory = {
	args: {}
}

export default meta
