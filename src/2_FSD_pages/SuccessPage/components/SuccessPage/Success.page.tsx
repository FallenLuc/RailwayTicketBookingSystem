import { getRouteSuccess } from "@config/router"
import { useGetCurrentDirectionInfoSelector } from "@features/FillingFormCurrentDirection"
import { ErrorScreen } from "@ui/ErrorScreen"
import { Page } from "@ui/Page"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { memo } from "react"
import { SuccessModal } from "../SuccessModal/SuccessModal"
import styles from "./SuccessPage.module.scss"

const pagePath = getRouteSuccess()

const SuccessPage = memo(() => {
	const currentDirection = useGetCurrentDirectionInfoSelector()

	if (!currentDirection?._id) {
		return (
			<ErrorScreen
				type={"link"}
				title={"Нет данных"}
				text={"На главную"}
				linkTo={"/"}
			/>
		)
	}

	return (
		<Page className={styles.SuccessPage}>
			<Header
				pagePath={pagePath.route}
				backgroundType={"end"}
			/>
			<SuccessModal />
			<div className={styles.pageContent}></div>
			<Footer pagePath={pagePath.route} />
		</Page>
	)
})

export default SuccessPage
