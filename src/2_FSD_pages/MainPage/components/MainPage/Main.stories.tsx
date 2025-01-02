import preview from "@_storybook/preview"
import {
	getCitiesRequestPaths,
	getSubscribeRequestPaths
} from "@api/libs/gettersRequestPaths.helper"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { cityDataMock } from "@entities/City"
import { type Meta, type StoryObj } from "@storybook/react"
import { MainPage } from "./MainPage.lazy"

const meta: Meta<typeof MainPage> = {
	title: "pages/MainPage",
	component: MainPage,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		},
		mockData: [
			{
				url: `${__API_URL__}${getCitiesRequestPaths("Мос")}`,
				method: "GET",
				status: 200,
				delay: 1000,
				response: [cityDataMock("москва"), cityDataMock("московия")]
			},
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

type TypeStory = StoryObj<typeof MainPage>

export const Default: TypeStory = {
	args: {}
}
