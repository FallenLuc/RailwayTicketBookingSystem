import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { ErrorScreen } from "./ErrorScreen"

const meta: Meta<typeof ErrorScreen> = {
	title: "shared/ErrorScreen",
	component: ErrorScreen,
	argTypes: {
		type: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"linkTo",
				"text",
				"title",
				"isTestLoading"
			]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof ErrorScreen>

export const Default: TypeStory = {
	args: {
		type: "link"
	}
}

export default meta
