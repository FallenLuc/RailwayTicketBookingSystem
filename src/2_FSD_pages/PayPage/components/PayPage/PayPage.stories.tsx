import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { PayPage } from "./PayPage"

const meta: Meta<typeof PayPage> = {
	title: "pages/PayPage",
	component: PayPage,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof PayPage>

export const Default: TypeStory = {
	args: {}
}

export default meta
