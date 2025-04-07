import type { createReduxStore } from "../store"

export type appStoreType = ReturnType<typeof createReduxStore>

export type appDispatchType = appStoreType["dispatch"]
