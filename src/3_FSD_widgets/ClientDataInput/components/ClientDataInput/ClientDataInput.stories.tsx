import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ClientDataInput } from "./ClientDataInput"

const meta: Meta<typeof ClientDataInput> = {
	title: "widgets/ClientDataInput",
	component: ClientDataInput,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof ClientDataInput>

export const Default: TypeStory = {
	args: {}
}

export default meta
