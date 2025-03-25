import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { carriageDataMock } from "@entities/Carriage/lib/mocks/carriageData.mock"
import { directionDataMock } from "@entities/Direction"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { PassengersPage } from "./PassengersPage.lazy"

const meta: Meta<typeof PassengersPage> = {
	title: "pages/PassengersPage",
	component: PassengersPage,
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

type TypeStory = StoryObj<typeof PassengersPage>

const state: DeepPartial<mainStateMap> = {
	currentDirection: {
		directionInfo: directionDataMock(),
		sum: 2000,
		carriageInfo: carriageDataMock(),
		seatsInfo: 1
	}
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}

export default meta
