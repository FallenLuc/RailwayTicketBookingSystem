import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { PassengersList } from "./PassengersList"

const meta: Meta<typeof PassengersList> = {
	title: "widgets/PassengersList",
	component: PassengersList,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof PassengersList>

export const Default: TypeStory = {
	args: {}
}

export default meta
