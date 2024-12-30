import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { SelectSort } from "./SelectSort"

const meta: Meta<typeof SelectSort> = {
	title: "features/SelectSort",
	component: SelectSort,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof SelectSort>

export const Default: TypeStory = {
	args: {}
}
