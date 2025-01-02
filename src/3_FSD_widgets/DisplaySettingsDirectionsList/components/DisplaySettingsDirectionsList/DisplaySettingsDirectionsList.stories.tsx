import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { DisplaySettingsDirectionsList } from "./DisplaySettingsDirectionsList"

const meta: Meta<typeof DisplaySettingsDirectionsList> = {
	title: "widgets/DisplaySettingsDirectionsList",
	component: DisplaySettingsDirectionsList,
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof DisplaySettingsDirectionsList>

export const Default: TypeStory = {
	args: {}
}
