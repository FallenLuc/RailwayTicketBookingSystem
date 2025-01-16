import { type Meta, type StoryObj } from "@storybook/react"
import { OverlayLoader } from "./OverlayLoader"

const meta: Meta<typeof OverlayLoader> = {
	title: "widgets/OverlayLoader",
	component: OverlayLoader,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof OverlayLoader>

export const Default: TypeStory = {
	args: {}
}
