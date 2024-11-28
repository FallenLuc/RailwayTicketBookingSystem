import { type Meta, type StoryObj } from "@storybook/react"
import { ChooseTrainPage } from "./ChooseTrainPage.lazy"

const meta: Meta<typeof ChooseTrainPage> = {
	title: "pages/ChooseTrainPage",
	component: ChooseTrainPage,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof ChooseTrainPage>

export const Default: TypeStory = {
	args: {}
}
