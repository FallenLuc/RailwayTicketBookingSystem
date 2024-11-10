import { type Meta, type StoryObj } from "@storybook/react"
import { SearchOfTrains } from "./SearchOfTrains"

const meta: Meta<typeof SearchOfTrains> = {
	title: "widgets/SearchOfTrains",
	component: SearchOfTrains,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof SearchOfTrains>

export const Default: TypeStory = {
	args: {}
}
