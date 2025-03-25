import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { clientDataMock } from "@entities/Client/lib/mocks/cliendData.mock"
import { type Meta, type StoryObj } from "@storybook/react"
import { ClientDataInput } from "./ClientDataInput"

const meta: Meta<typeof ClientDataInput> = {
	title: "widgets/ClientDataInput",
	component: ClientDataInput,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "isTestLoading"]
		}
	},
	decorators: [
		CenterDecorator,
		StoreDecorator({ clientData: { info: clientDataMock() } }),
		RestrictionDecorator("large")
	]
}

type TypeStory = StoryObj<typeof ClientDataInput>

export const Default: TypeStory = {
	args: {}
}

export default meta
