import type { routeInfoType } from "@config/router/config/route.config"
import { routeConfig } from "@config/router/config/route.config"
import { type RouteProps } from "react-router"
import type { ReactNode } from "react"

import { PagesNames } from "@config/router"
import { MainPage } from "@pages/MainPage"
import { ChooseTrainPage } from "@pages/ChooseTrainPage"
import { SuccessPage } from "@pages/SuccessPage"
import { NotFoundPage } from "@pages/NotFoundPage"

export type CustomRouteProps = routeInfoType & RouteProps

export const mapperPageNameComponent: Record<PagesNames, ReactNode> = {
	[PagesNames.Main]: <MainPage />,
	[PagesNames.MainHowItWorks]: <MainPage />,
	[PagesNames.MainAboutUs]: <MainPage />,
	[PagesNames.MainReviews]: <MainPage />,
	[PagesNames.MainContacts]: <MainPage />,
	[PagesNames.ChooseTrain]: <ChooseTrainPage />,
	[PagesNames.Success]: <SuccessPage />,
	[PagesNames.NotFound]: <NotFoundPage />
}

export const routerProviderConfig: CustomRouteProps[] = Object.entries(routeConfig).map(
	([routeName, routeInfo]) => {
		return {
			...routeInfo,
			element: mapperPageNameComponent[routeName as unknown as PagesNames]
		}
	}
)
