import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { carriageDataMock } from "@entities/Carriage/lib/mocks/carriageData.mock"
import { clientDataMock } from "@entities/Client/lib/mocks/cliendData.mock"
import { directionDataMock } from "@entities/Direction"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { PayPage } from "./PayPage.lazy"

const meta: Meta<typeof PayPage> = {
	title: "pages/PayPage",
	component: PayPage,
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

type TypeStory = StoryObj<typeof PayPage>

const state: DeepPartial<mainStateMap> = {
	currentDirection: {
		directionInfo: directionDataMock(),
		sum: 2000,
		_inited: true,
		seatsInfo: 2,
		carriageInfo: carriageDataMock()
	},
	clientData: {
		info: clientDataMock()
	}
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}

export default meta
