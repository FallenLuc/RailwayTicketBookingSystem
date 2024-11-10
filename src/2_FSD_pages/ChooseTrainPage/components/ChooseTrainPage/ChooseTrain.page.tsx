import { memo } from "react"
import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { Header } from "@widgets/Header"
import { SearchOfTrains } from "@widgets/SearchOfTrains"

type ChooseTrainPageProps = {
	className?: string
}
const ChooseTrainPage = memo<ChooseTrainPageProps>(props => {
	const { className } = props

	return (
		<div className={classNamesHelp("", {}, [className, "pageStyle"])}>
			<Header typeBackground={"search"}>
				<SearchOfTrains view={"full"} />
			</Header>
		</div>
	)
})

export default ChooseTrainPage
