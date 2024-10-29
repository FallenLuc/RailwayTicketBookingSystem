import { lazy } from "react"

const ChooseTrainPageLazy = lazy(() => import("./ChooseTrain.page"))

export { ChooseTrainPageLazy as ChooseTrainPage }
