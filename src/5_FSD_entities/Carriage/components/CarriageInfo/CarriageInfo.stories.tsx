import preview from "@_storybook/preview"
import { CenterDecorator } from "@decorators/storybook/Center.decorator"
import { RestrictionDecorator } from "@decorators/storybook/Restriction.decorator"
import { type Meta, type StoryObj } from "@storybook/react"
import { HStack, VStack } from "@ui/Stack"
import { Text } from "@ui/Text"
import { uid } from "uid"
import { carriageDataMock } from "../../lib/mocks/carriageData.mock"
import { CarriageInfo } from "./CarriageInfo"
import styles from "./CarriageInfo.module.scss"

const meta: Meta<typeof CarriageInfo> = {
	title: "entities/Carriage/CarriageInfo",
	component: CarriageInfo,
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

type TypeStory = StoryObj<typeof CarriageInfo>

export const Default: TypeStory = {
	args: {
		data: carriageDataMock(),
		children: [
			<VStack
				key={uid()}
				className={styles.carriageChangerStories}
				justify={"center"}
			>
				<Text
					text={"carriage changer"}
					colorText={"main-dark"}
					fontSizeText={"xs"}
					fontWeightText={"fat"}
				/>
			</VStack>,
			<VStack
				key={uid()}
				align={"center"}
				justify={"center"}
				className={styles.seatsMapStories}
			>
				<Text
					text={"seats map"}
					colorText={"main-dark"}
					fontSizeText={"xs"}
					fontWeightText={"fat"}
				/>
			</VStack>,
			<HStack
				key={uid()}
				justify={"flexEnd"}
			>
				<VStack
					widthMax={false}
					className={styles.totalSumStories}
					justify={"center"}
					align={"center"}
				>
					<Text
						text={"total price"}
						colorText={"main-dark"}
						fontSizeText={"xs"}
						fontWeightText={"fat"}
					/>
				</VStack>
			</HStack>
		]
	}
}

export default meta
