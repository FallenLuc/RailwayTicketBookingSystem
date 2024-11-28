import { lazy } from "react"

export const SuccessPageLazy = lazy(() => import("./Success.page"))

export { SuccessPageLazy as SuccessPage }
