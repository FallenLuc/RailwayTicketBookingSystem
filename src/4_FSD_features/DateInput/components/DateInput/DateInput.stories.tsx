import { type Meta, type StoryObj } from "@storybook/react"
import { DateInput } from "./DateInput"

const meta: Meta<typeof DateInput> = {
	title: "feature/DateInput",
	component: DateInput,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof DateInput>

export const Default: TypeStory = {
	args: {}
}
