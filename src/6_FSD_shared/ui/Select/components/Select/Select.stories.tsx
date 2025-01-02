import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { Select } from "./Select"

const meta: Meta<typeof Select> = {
	title: "shared/Select",
	component: Select,
	parameters: {
		controls: {
			exclude: [
				...(preview?.parameters?.controls.exclude ?? undefined),
				"options",
				"classNameLabel",
				"value",
				"onChange",
				"defaultValue",
				"theme",
				"disabled"
			]
		}
	},
	decorators: [CenterDecorator]
}

type TypeStory = StoryObj<typeof Select>

export const Default: TypeStory = {
	parameters: {
		controls: {
			exclude: [...(meta?.parameters?.controls.exclude ?? undefined), "label"]
		}
	},
	args: {
		value: "time",
		theme: "clear",
		label: "сортировать по:",
		options: [
			{ value: "time", content: "времени" },
			{ value: "price", content: "стоимости" },
			{ value: "direction", content: "длительности" }
		]
	}
}

export const Border: TypeStory = {
	parameters: {
		controls: {
			exclude: [...(meta?.parameters?.controls.exclude ?? undefined), "label"]
		}
	},
	args: {
		value: "adult",
		theme: "border",
		options: [
			{ value: "adult", content: "Взрослый" },
			{ value: "child", content: "Детский" }
		]
	}
}

export default meta
