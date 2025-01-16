import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { DisplaySettingsDirectionsList } from "./DisplaySettingsDirectionsList"

const meta: Meta<typeof DisplaySettingsDirectionsList> = {
	title: "widgets/DisplaySettingsDirectionsList",
	component: DisplaySettingsDirectionsList,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "pagePath"]
		}
	},
	decorators: [CenterDecorator]
}

const initialState: DeepPartial<mainStateMap> = {
	formForSearchOfDirectionsStateMap: {
		displayData: {
			limit: 5,
			offset: 1
		}
	},
	directionsList: {
		totalCount: 50
	}
}

type TypeStory = StoryObj<typeof DisplaySettingsDirectionsList>

export const Default: TypeStory = {
	args: {
		children: <div style={{ height: "500px", backgroundColor: "#ffffff", width: "100%" }}></div>
	},
	decorators: [StoreDecorator(initialState)]
}
export default meta
