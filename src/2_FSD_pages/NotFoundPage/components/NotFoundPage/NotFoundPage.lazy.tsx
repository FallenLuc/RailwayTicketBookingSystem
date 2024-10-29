import { lazy } from "react"

const NotFoundPageLazy = lazy(() => import("./NotFound.page"))

export { NotFoundPageLazy as NotFoundPage }
