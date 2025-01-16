import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ErrorPage } from "./ErrorPage.lazy"

const meta: Meta<typeof ErrorPage> = {
	title: "pages/ErrorPage",
	component: ErrorPage,
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof ErrorPage>

export const Default: TypeStory = {
	args: {}
}

export default meta
