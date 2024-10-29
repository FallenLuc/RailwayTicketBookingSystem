import { type Meta, type StoryObj } from "@storybook/react"
import { SuccessPage } from "./SuccessPage.lazy"

const meta: Meta<typeof SuccessPage> = {
	title: "pages/SuccessPage",
	component: SuccessPage,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof SuccessPage>

export const Default: TypeStory = {
	args: {}
}
