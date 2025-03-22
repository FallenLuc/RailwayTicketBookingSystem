import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { PassengersInputList } from "./PassengersInputList"

const meta: Meta<typeof PassengersInputList> = {
	title: "widgets/PassengersInputList",
	component: PassengersInputList,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof PassengersInputList>

export const Default: TypeStory = {
	args: {}
}

export default meta
