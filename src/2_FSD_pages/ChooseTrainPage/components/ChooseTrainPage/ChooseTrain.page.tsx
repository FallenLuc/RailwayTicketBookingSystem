import { getRouteChooseTrain } from "@config/router"
import {
	fetchDirectionsThunk,
	useGetDirectionsListErrorSelector,
	useGetDirectionsListIsLoadingSelector
} from "@entities/Direction"
import { BreadcrumbsLine } from "@features/BreadcrumbsLine"
import { useGetFormForSearchOfDirectionsDataForRequestSelector } from "@features/FillingFormForSearchOfDirections"
import { LastTickets } from "@features/LastTickets"
import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import { ContainerLayout } from "@ui/layout"
import { Page } from "@ui/Page"
import { HStack, VStack } from "@ui/Stack"
import { DirectionsList } from "@widgets/DirectionsList"
import { FilterDirections } from "@widgets/FilterDirections"
import { Footer } from "@widgets/Footer"
import { Header } from "@widgets/Header"
import { SearchDirections } from "@widgets/SearchDirections"
import { memo, useCallback, useEffect, useMemo } from "react"
import styles from "./ChooseTrain.module.scss"

const pagePath = getRouteChooseTrain()

const ChooseTrainPage = memo(() => {
	const dispatch = useAppDispatch()

	const isLoading = useGetDirectionsListIsLoadingSelector()
	const error = useGetDirectionsListErrorSelector()
	const formParametres = useGetFormForSearchOfDirectionsDataForRequestSelector()

	const onSearchHandler = useCallback(() => {
		if (formParametres) {
			dispatch(fetchDirectionsThunk(formParametres))
		}
	}, [dispatch, formParametres])

	useEffect(() => {
		onSearchHandler()
		//eslint-disable-next-line
	}, [])

	const contentPage = (
		<>
			<Header
				typeBackground={"search"}
				pagePath={pagePath.route}
			>
				<SearchDirections
					view={"large"}
					onSearch={onSearchHandler}
				/>
			</Header>
			<BreadcrumbsLine stage={"tickets"} />
			<div className={styles.content}>
				<ContainerLayout>
					{isLoading ?
						"Loading"
					:	<HStack gap={"gapXL"}>
							<VStack
								widthMax={false}
								TagType={"aside"}
								gap={"gapXL"}
							>
								<FilterDirections onSearch={onSearchHandler} />
								<LastTickets />
							</VStack>
							<div>
								{error && "Error"}
								<DirectionsList />
							</div>
						</HStack>
					}
				</ContainerLayout>
			</div>
		</>
	)

	const footer = useMemo(() => <Footer pagePath={pagePath.route} />, [])

	return (
		<Page
			content={contentPage}
			footer={footer}
		/>
	)
})

export default ChooseTrainPage
