import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { directionDataMock } from "@entities/Direction"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { CurrentDirectionSidebar } from "./CurrentDirectionSidebar"

const initialState: DeepPartial<mainStateMap> = {
	currentDirection: {
		directionInfo: directionDataMock(),
		sum: 2000
	}
}

const meta: Meta<typeof CurrentDirectionSidebar> = {
	title: "widgets/CurrentDirectionSidebar",
	component: CurrentDirectionSidebar,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "isTestLoading"]
		}
	},
	decorators: [CenterDecorator, StoreDecorator(initialState)]
}

type TypeStory = StoryObj<typeof CurrentDirectionSidebar>

export const Default: TypeStory = {
	args: {}
}

export default meta
