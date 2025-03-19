import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { CheckPage } from "./CheckPage.lazy"

const meta: Meta<typeof CheckPage> = {
	title: "pages/CheckPage",
	component: CheckPage,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof CheckPage>

export const Default: TypeStory = {
	args: {}
}

export default meta
