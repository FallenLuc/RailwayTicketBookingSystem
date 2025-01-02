import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Pagination } from "./Pagination"

const meta: Meta<typeof Pagination> = {
	title: "features/Pagination",
	component: Pagination,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Pagination>

export const Default: TypeStory = {
	args: {
		quantity: 10
	}
}
