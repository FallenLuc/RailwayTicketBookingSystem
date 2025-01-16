import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Page } from "./Page"
import styles from "./Page.module.scss"

const meta: Meta<typeof Page> = {
	title: "shared/Page",
	component: Page,
	parameters: {
		controls: {
			exclude: [...(preview?.parameters?.controls.exclude ?? undefined), "content", "footer"]
		}
	},
	decorators: [CenterDecorator]
}

export default meta

type TypeStory = StoryObj<typeof Page>

export const Default: TypeStory = {
	args: {
		content: <div className={styles.headerStories}></div>,
		footer: <div className={styles.footerStories}></div>
	}
}
