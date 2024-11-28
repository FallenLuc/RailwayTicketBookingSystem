import { type Meta, type StoryObj } from "@storybook/react"
import { AboutUs } from "./AboutUs"

const meta: Meta<typeof AboutUs> = {
	title: "widgets/AboutUs",
	component: AboutUs,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof AboutUs>

export const Default: TypeStory = {
	args: {}
}
