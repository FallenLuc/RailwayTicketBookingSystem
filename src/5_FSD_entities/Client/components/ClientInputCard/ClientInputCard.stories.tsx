import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { clientDataMock } from "../../lib/mocks/cliendData.mock"
import { ClientInputCard } from "./ClientInputCard"

const meta: Meta<typeof ClientInputCard> = {
	title: "entities/Client/ClientInputCard",
	component: ClientInputCard,
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"onChange",
				"isTestLoading",
				"value"
			]
		}
	},
	decorators: [RestrictionDecorator("large"), CenterDecorator]
}

type TypeStory = StoryObj<typeof ClientInputCard>

export const Default: TypeStory = {
	args: {
		value: clientDataMock({ phoneNumber: { value: "89745", isValid: false } })
	}
}

export default meta
