import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import type { directionsListStateMap } from "@entities/Direction"
import { directionsListDataMock } from "@entities/Direction"
import { type Meta, type StoryObj } from "@storybook/react"
import { DirectionsList } from "./DirectionsList"

const meta: Meta<typeof DirectionsList> = {
	title: "widgets/DirectionsList",
	component: DirectionsList,
	parameters: {
		backgrounds: {
			default: "Light"
		},
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined)]
		}
	},
	decorators: [RestrictionDecorator("large"), CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof DirectionsList>

const directionsMock = directionsListDataMock()

const directionsListState: DeepPartial<directionsListStateMap> = {
	isLoading: false,
	error: undefined,
	totalCount: 5,
	ids: directionsMock.entityAdapter.ids,
	entities: directionsMock.entityAdapter.entities
}

export const Default: TypeStory = {
	args: {
		isTestLoading: false
	},
	decorators: [StoreDecorator({ directionsList: directionsListState })]
}

export const Error: TypeStory = {
	decorators: [StoreDecorator({ directionsList: { ...directionsListState, error: "no data" } })]
}
