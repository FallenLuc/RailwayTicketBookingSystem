import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"

type ChooseTrainPageProps = {
	className?: string
}
export const ChooseTrainPage = memo<ChooseTrainPageProps>(props => {
	const { className } = props

	return <div className={classNamesHelp("", {}, [className, "pageStyle"])}></div>
})
