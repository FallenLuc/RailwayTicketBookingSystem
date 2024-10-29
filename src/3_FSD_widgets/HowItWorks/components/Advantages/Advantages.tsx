import { memo } from "react"
import styles from "./Advantages.module.scss"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { HStack } from "@ui/Stack"
import { AdvantageItem } from "./ui/AdvantageItem/AdvantageItem"
import { MonitorIcon, OfficesIcon, GlobusIcon } from "@assets/index"

type AdvantagesProps = {
	className?: string
}
export const Advantages = memo<AdvantagesProps>(props => {
	const { className } = props

	return (
		<HStack
			align={"flexStart"}
			justify={"spaceBetween"}
			TagType={"ul"}
			widthMax={true}
			className={classNamesHelp(styles.Advantages, {}, [className])}
		>
			<AdvantageItem
				Icon={MonitorIcon}
				text={"Удобный заказ на сайте"}
			/>
			<AdvantageItem
				Icon={OfficesIcon}
				text={"Нет необходимости ехать в офис"}
			/>
			<AdvantageItem
				Icon={GlobusIcon}
				text={"Огромный выбор направлений"}
			/>
		</HStack>
	)
})
