import preview from "@_storybook/preview"
import {
	getCitiesRequestPaths,
	getDirectionsRequestPaths,
	getLastDirectionsRequestPaths,
	getSubscribeRequestPaths
} from "@api/libs/gettersRequestPaths.helper"
import type { DeepPartial } from "@customTypes/global.types"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { cityDataMock } from "@entities/City"
import { directionsListDataMock } from "@entities/Direction"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { ChooseTrainPage } from "./ChooseTrainPage.lazy"

const initialState: DeepPartial<mainStateMap> = {
	formForSearchOfDirectionsStateMap: {
		isValidForm: true,
		data: {
			have_air_conditioning: false
		},
		displayData: {
			offset: 1,
			limit: 5
		}
	}
}

const meta: Meta<typeof ChooseTrainPage> = {
	title: "pages/ChooseTrainPage",
	component: ChooseTrainPage,
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
			},
			{
				url: `${__API_URL__}${getLastDirectionsRequestPaths()}`,
				method: "GET",
				status: 200,
				delay: 0,
				response: directionsListDataMock(2, true).directions
			},
			{
				url: `${__API_URL__}${getDirectionsRequestPaths()}`,
				method: "GET",
				status: 200,
				delay: 0,
				response: {
					total_count: 10,
					items: directionsListDataMock(5, true).directions
				}
			}
		]
	},
	decorators: [StoreDecorator(initialState)]
}

export default meta

type TypeStory = StoryObj<typeof ChooseTrainPage>

export const Default: TypeStory = {
	args: {}
}
