import { lazy } from "react"

const ErrorPageLazy = lazy(() => import("./Error.page"))

export { ErrorPageLazy as ErrorPage }
