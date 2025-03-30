import preview from "@_storybook/preview"
import type { DeepPartial } from "@customTypes/global.types"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { StoreDecorator } from "@decorators/storybook/Store.decorator"
import { directionDataMock } from "@entities/Direction"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { type Meta, type StoryObj } from "@storybook/react"
import { PageContent } from "./PageContent"
import styles from "./PageContent.module.scss"

const meta: Meta<typeof PageContent> = {
	title: "widgets/PageContent",
	component: PageContent,

	parameters: {
		backgrounds: {
			default: "Dark"
		},
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"nextLink",
				"backLink",
				"textNextButton",
				"textBackButton",
				"isNextButton",
				"isBackButton",
				"onNextCustomHandler",
				"onBackCustomHandler",
				"isTestLoading"
			]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof PageContent>
const state: DeepPartial<mainStateMap> = {
	currentDirection: {
		directionInfo: directionDataMock()
	}
}

export const Default: TypeStory = {
	args: {
		className: styles.wrapperStorybook,
		children: [
			<div
				key={"1"}
				className={styles.leftBlockStorybook}
			/>,
			<div
				key={"2"}
				className={styles.leftBlockStorybook}
			/>
		]
	},
	decorators: [StoreDecorator(state)]
}
export const Error: TypeStory = {
	args: {},
	decorators: []
}

export default meta
