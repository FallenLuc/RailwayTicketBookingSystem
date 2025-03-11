import { lazy } from "react"

const PassengersPageLazy = lazy(() => import("./Passengers.page"))

export { PassengersPageLazy as PassengersPage }
