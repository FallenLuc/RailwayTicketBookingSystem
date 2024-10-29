import { lazy } from "react"

const MainPageLazy = lazy(() => import("./Main.page"))

export { MainPageLazy as MainPage }
