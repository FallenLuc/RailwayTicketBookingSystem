import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { AboutUs } from "./AboutUs"

const meta: Meta<typeof AboutUs> = {
	title: "widgets/AboutUs",
	component: AboutUs,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof AboutUs>

export const Default: TypeStory = {
	args: {}
}
