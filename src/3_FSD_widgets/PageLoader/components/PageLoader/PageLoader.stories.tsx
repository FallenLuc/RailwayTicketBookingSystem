import { type Meta, type StoryObj } from "@storybook/react"
import { PageLoader } from "./PageLoader"

const meta: Meta<typeof PageLoader> = {
	title: "widgets/PageLoader",
	component: PageLoader,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof PageLoader>

export const Default: TypeStory = {
	args: {}
}
