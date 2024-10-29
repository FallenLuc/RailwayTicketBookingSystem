import { type Meta, type StoryObj } from "@storybook/react"
import { Background } from "./Background"

const meta: Meta<typeof Background> = {
	title: "shared/HeaderBackground",
	component: Background,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof Background>

export const Default: TypeStory = {
	args: {}
}
