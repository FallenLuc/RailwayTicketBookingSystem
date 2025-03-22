import { lazy } from "react"

const CheckPageLazy = lazy(() => import("./Check.page"))

export { CheckPageLazy as CheckPage }
