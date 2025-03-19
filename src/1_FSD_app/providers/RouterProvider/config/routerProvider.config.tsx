import { RouteNames } from "@config/router"
import type { routeInfoType } from "@config/router/config/route.config"
import { routeConfig } from "@config/router/config/route.config"
import { ChooseTrainPage } from "@pages/ChooseTrainPage"
import { MainPage } from "@pages/MainPage"
import { NotFoundPage } from "@pages/NotFoundPage"
import { PassengersPage } from "@pages/PassengersPage"
import { PayPage } from "@pages/PayPage"
import { SuccessPage } from "@pages/SuccessPage"
import { TicketPage } from "@pages/TicketPage"
import type { ReactNode } from "react"
import { type RouteProps } from "react-router"

export type CustomRouteProps = routeInfoType & RouteProps

export const mapperPageNameComponent: Record<RouteNames, ReactNode> = {
	[RouteNames.Main]: <MainPage />,
	[RouteNames.Header]: <MainPage />,
	[RouteNames.HowItWorks]: <MainPage />,
	[RouteNames.AboutUS]: <MainPage />,
	[RouteNames.Reviews]: <MainPage />,
	[RouteNames.Contacts]: <MainPage />,
	[RouteNames.ChooseTrain]: <ChooseTrainPage />,
	[RouteNames.Passengers]: <PassengersPage />,
	[RouteNames.Pay]: <PayPage />,
	[RouteNames.Check]: <></>,
	[RouteNames.Success]: <SuccessPage />,
	[RouteNames.NotFound]: <NotFoundPage />,
	[RouteNames.Ticket]: <TicketPage />
}

export const routerProviderConfig: CustomRouteProps[] = Object.entries(routeConfig).map(
	([routeName, routeInfo]) => {
		return {
			...routeInfo,
			element: mapperPageNameComponent[routeName as RouteNames]
		}
	}
)
