import { lazy } from "react"

export const PayPageLazy = lazy(() => import("./Pay.page"))

export { PayPageLazy as PayPage }
