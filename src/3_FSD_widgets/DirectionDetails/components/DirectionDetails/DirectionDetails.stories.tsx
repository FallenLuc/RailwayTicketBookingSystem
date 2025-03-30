import preview from "@_storybook/preview"
import { getCarriageInfoRequestPaths } from "@api/libs/gettersRequestPaths.helper"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import {
	carriageDataFromServerMock,
	carriageDataMock
} from "@entities/Carriage/lib/mocks/carriageData.mock"
import { directionDataMock } from "@entities/Direction"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { DirectionDetails } from "./DirectionDetails"

const meta: Meta<typeof DirectionDetails> = {
	title: "widgets/DirectionDetails",
	component: DirectionDetails,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "isTestLoading"]
		},
		mockData: [
			{
				url: `${__API_URL__}${getCarriageInfoRequestPaths("1")}`,
				method: "GET",
				status: 200,
				delay: 0,
				response: [carriageDataFromServerMock()]
			}
		]
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof DirectionDetails>

const state: DeepPartial<mainStateMap> = {
	currentDirection: {
		directionInfo: directionDataMock({ _id: "1" }),
		carriageInfo: carriageDataMock(),
		seatsInfo: 2
	},
	directionsList: { ids: [], entities: {} }
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}

export default meta
