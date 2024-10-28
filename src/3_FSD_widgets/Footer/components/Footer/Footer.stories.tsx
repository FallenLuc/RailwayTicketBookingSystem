import { type Meta, type StoryObj } from "@storybook/react"
import { Footer } from "./Footer"

const meta: Meta<typeof Footer> = {
	title: "widgets/Footer",
	component: Footer,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Footer>

export const Default: TypeStory = {
	args: {}
}
