import { type Meta, type StoryObj } from "@storybook/react"
import { LocationInput } from "./LocationInput"

const meta: Meta<typeof LocationInput> = {
	title: "features/LocationInput",
	component: LocationInput,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof LocationInput>

export const Default: TypeStory = {
	args: {}
}
