import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { HowItWorks } from "./HowItWorks"

const meta: Meta<typeof HowItWorks> = {
	title: "widgets/HowItWorks",
	component: HowItWorks,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof HowItWorks>

export const Default: TypeStory = {
	args: {}
}
