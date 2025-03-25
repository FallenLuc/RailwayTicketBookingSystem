import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { carriageDataMock } from "@entities/Carriage/lib/mocks/carriageData.mock"
import { directionDataMock, directionsListDataMock } from "@entities/Direction"
import { passengerDataMock } from "@entities/Passenger"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { CheckPage } from "./CheckPage.lazy"

const meta: Meta<typeof CheckPage> = {
	title: "pages/CheckPage",
	component: CheckPage,
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

type TypeStory = StoryObj<typeof CheckPage>

const directionsMock = directionsListDataMock()

const state: DeepPartial<mainStateMap> = {
	currentDirection: {
		directionInfo: directionDataMock(),
		sum: 2000,
		_inited: true,
		seatsInfo: 2,
		carriageInfo: carriageDataMock()
	},
	directionsList: {
		ids: directionsMock.entityAdapter.ids,
		entities: directionsMock.entityAdapter.entities
	},
	formPassengers: {
		ids: ["1", "2"],
		entities: {
			"1": passengerDataMock({ id: "1" }),
			"2": passengerDataMock({ id: "2" })
		}
	}
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}

export default meta
