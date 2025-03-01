import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { PassengersPage } from "./PassengersPage.lazy"

const meta: Meta<typeof PassengersPage> = {
	title: "pages/PassengersPage",
	component: PassengersPage,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof PassengersPage>

export const Default: TypeStory = {
	args: {}
}

export default meta
