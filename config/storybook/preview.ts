import { RouterDecorator } from "@decorators/storybook/Router.decorator"
import { StyleDecorator } from "@decorators/storybook/Style.decorator"

import type { Preview } from "@storybook/react"

const preview: Preview = {
	parameters: {
		layout: "fullscreen",
		mockAddonConfigs: {
			globalMockData: [],
			disableUsingOriginal: false,
			refreshStoryOnUpdate: true,
			disable: true
		},
		controls: {
			exclude: ["className", "classNames"]
		}
	},
	decorators: [StyleDecorator, RouterDecorator]
}

export default preview
