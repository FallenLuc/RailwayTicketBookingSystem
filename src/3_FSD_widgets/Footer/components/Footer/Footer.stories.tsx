import preview from "@_storybook/preview"
import { getSubscribeRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Footer } from "./Footer"

const meta: Meta<typeof Footer> = {
	title: "widgets/Footer",
	component: Footer,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "pagePath"]
		},
		mockData: [
			{
				url: `${__API_URL__}${getSubscribeRequestPaths("df@f.ru")}`,
				method: "POST",
				status: 200,
				delay: 1000,
				response: {
					status: true
				}
			}
		]
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Footer>

export const Default: TypeStory = {
	args: {}
}
