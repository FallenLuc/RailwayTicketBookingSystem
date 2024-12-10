import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Page } from "./Page"

const meta: Meta<typeof Page> = {
	title: "shared/Page",
	component: Page,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Page>

export const Default: TypeStory = {
	args: {}
}

// To Hold сделать сторис
