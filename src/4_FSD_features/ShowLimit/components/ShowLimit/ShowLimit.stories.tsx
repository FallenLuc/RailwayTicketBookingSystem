import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ShowLimit } from "./ShowLimit"

const meta: Meta<typeof ShowLimit> = {
	title: "features/ShowLimit",
	component: ShowLimit,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof ShowLimit>

export const Default: TypeStory = {
	args: {}
}
