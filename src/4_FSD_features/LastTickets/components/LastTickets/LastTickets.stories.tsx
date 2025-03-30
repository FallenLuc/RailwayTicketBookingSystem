import preview from "@_storybook/preview"
import { getLastDirectionsRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { directionsListDataMock } from "@entities/Direction"
import { type Meta, type StoryObj } from "@storybook/react"
import { LastTickets } from "./LastTickets"

const meta: Meta<typeof LastTickets> = {
	title: "features/LastTickets",
	component: LastTickets,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "isTestLoading"]
		}
	},
	decorators: [CenterDecorator, RestrictionDecorator()]
}

export default meta

type TypeStory = StoryObj<typeof LastTickets>

export const Default: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}${getLastDirectionsRequestPaths()}`,
				method: "GET",
				status: 200,
				delay: 0,
				response: directionsListDataMock(2, true).directions
			}
		]
	},
	args: {
		isTestLoading: false
	}
}

export const Error: TypeStory = {
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}${getLastDirectionsRequestPaths()}`,
				method: "GET",
				status: 500,
				delay: 0,
				response: directionsListDataMock(2, true).directions
			}
		]
	},
	args: {}
}
