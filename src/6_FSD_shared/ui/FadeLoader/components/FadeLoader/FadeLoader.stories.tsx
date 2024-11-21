import { type Meta, type StoryObj } from "@storybook/react"
import { FadeLoader } from "./FadeLoader"

const meta: Meta<typeof FadeLoader> = {
	title: "shared/FadeLoader",
	component: FadeLoader,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof FadeLoader>

export const Default: TypeStory = {
	args: {}
}
