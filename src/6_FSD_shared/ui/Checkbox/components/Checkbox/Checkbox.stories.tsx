import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Checkbox } from "./Checkbox"

const meta: Meta<typeof Checkbox> = {
	title: "shared/Checkbox",
	component: Checkbox,
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"onChange",
				"isTestLoading"
			]
		},
		backgrounds: {
			default: "Light"
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof Checkbox>

export const Default: TypeStory = {
	args: {
		isChecked: true
	}
}

export default meta
