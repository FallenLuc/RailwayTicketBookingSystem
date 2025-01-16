import preview from "@_storybook/preview"
import { getCitiesRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { cityDataMock } from "@entities/City"
import { type Meta, type StoryObj } from "@storybook/react"
import { LocationInput } from "./LocationInput"

const meta: Meta<typeof LocationInput> = {
	title: "features/LocationInput",
	component: LocationInput,
	parameters: {
		mockData: [
			{
				url: `${__API_URL__}${getCitiesRequestPaths("Мос")}`,
				method: "GET",
				status: 200,
				delay: 1000,
				response: [cityDataMock("москва"), cityDataMock("московия")]
			}
		],
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"value",
				"onSaveToForm"
			]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof LocationInput>

export const Default: TypeStory = {
	args: {
		testIsFetching: false,
		placeholder: "Куда"
	}
}

export default meta
