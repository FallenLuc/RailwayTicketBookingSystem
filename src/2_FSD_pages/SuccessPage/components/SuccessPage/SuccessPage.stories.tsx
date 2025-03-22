import type { DeepPartial } from "@customTypes/global.types"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { clientDataMock } from "@entities/Client/lib/mocks/cliendData.mock"
import { directionDataMock } from "@entities/Direction"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { SuccessPage } from "./SuccessPage.lazy"

const meta: Meta<typeof SuccessPage> = {
	title: "pages/SuccessPage",
	component: SuccessPage,
	decorators: []
}

export default meta

type TypeStory = StoryObj<typeof SuccessPage>

const state: DeepPartial<mainStateMap> = {
	clientData: {
		info: clientDataMock()
	},
	currentDirection: {
		sum: 7160,
		directionInfo: directionDataMock()
	}
}

export const Default: TypeStory = {
	args: {},
	decorators: [StoreDecorator(state)]
}
