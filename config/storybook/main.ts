import type { StorybookConfig } from "@storybook/react-webpack5"
import { webpackStorybookConfig } from "./webpackStorybook.config"

const config: StorybookConfig = {
	stories: ["../../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	core: {
		disableTelemetry: true
	},
	addons: [
		"@storybook/addon-webpack5-compiler-swc",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@chromatic-com/storybook",
		"storybook-addon-mock"
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {
			builder: {
				fsCache: false
			}
		}
	},
	swc: () => ({
		jsc: {
			transform: {
				react: {
					runtime: "automatic"
				}
			}
		}
	}),
	docs: {},
	webpackFinal: async config => webpackStorybookConfig(config)
}
export default config
