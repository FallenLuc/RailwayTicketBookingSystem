import { type Meta, type StoryObj } from "@storybook/react"
import { MainPage } from "./MainPage"

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof MainPage>

export const Default: TypeStory = {
	args: {}
}
