import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Pagination } from "./Pagination"

const meta: Meta<typeof Pagination> = {
	title: "features/Pagination",
	component: Pagination,
	argTypes: {},
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"onChange",
				"quantity"
			]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Pagination>

export const Default: TypeStory = {
	args: {
		quantity: 5,
		value: 4
	}
}
