import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { BreadcrumbsLine } from "./BreadcrumbsLine"

const meta: Meta<typeof BreadcrumbsLine> = {
	title: "features/BreadcrumbsLine",
	component: BreadcrumbsLine,
	argTypes: {
		stage: {
			control: "inline-radio"
		}
	},
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof BreadcrumbsLine>

export const Default: TypeStory = {
	args: {
		stage: "tickets"
	}
}
