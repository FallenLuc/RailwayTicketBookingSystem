import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { directionGeneralDataMock } from "../../lib/mocks/directionGeneralData.mock"
import { DirectionCard } from "./DirectionCard"

const meta: Meta<typeof DirectionCard> = {
	title: "entities/Direction/DirectionCard",
	component: DirectionCard,
	argTypes: {
		typeCard: {
			control: "inline-radio"
		},
		typeButton: {
			control: "inline-radio"
		}
	},
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"data",
				"onClick",
				"onClickCustomHandler"
			]
		}
	},
	decorators: [CenterDecorator, RestrictionDecorator("large")]
}

export default meta

type TypeStory = StoryObj<typeof DirectionCard>

export const Default: TypeStory = {
	args: {
		typeCard: "full",
		typeButton: "default",
		buttonText: "Выбрать места",
		isTitle: false,
		data: directionGeneralDataMock()
	}
}
