import { type Meta, type StoryObj } from "@storybook/react"
import { Subscribtion } from "./Subscribtion"

const meta: Meta<typeof Subscribtion> = {
	title: "features/Subscribtion",
	component: Subscribtion,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Subscribtion>

export const Default: TypeStory = {
	args: {}
}
