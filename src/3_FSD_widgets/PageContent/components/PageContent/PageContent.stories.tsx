import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { PageContent } from "./PageContent"

const meta: Meta<typeof PageContent> = {
	title: "pages/PageContent",
	component: PageContent,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof PageContent>

export const Default: TypeStory = {
	args: {}
}

export default meta
