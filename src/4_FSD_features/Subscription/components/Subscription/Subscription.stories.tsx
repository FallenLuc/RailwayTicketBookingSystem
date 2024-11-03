import { type Meta, type StoryObj } from "@storybook/react"
import { Subscription } from "./Subscription"

const meta: Meta<typeof Subscription> = {
	title: "features/Subscription",
	component: Subscription,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Subscription>

export const Default: TypeStory = {
	args: {}
}
