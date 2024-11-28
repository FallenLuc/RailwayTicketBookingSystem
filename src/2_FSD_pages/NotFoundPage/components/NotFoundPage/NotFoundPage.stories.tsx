import { type Meta, type StoryObj } from "@storybook/react"
import { NotFoundPage } from "./NotFoundPage.lazy"

const meta: Meta<typeof NotFoundPage> = {
	title: "pages/NotFoundPage",
	component: NotFoundPage,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof NotFoundPage>

export const Default: TypeStory = {
	args: {}
}
