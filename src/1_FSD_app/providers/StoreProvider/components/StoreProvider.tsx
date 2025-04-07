import { createReduxStore } from "@store/store"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { PropsWithChildren } from "react"
import { memo } from "react"
import { Provider } from "react-redux"

type StoreProviderProps = {
	initialState?: mainStateMap
} & PropsWithChildren

export const StoreProvider = memo<StoreProviderProps>(props => {
	const { children, initialState } = props

	const store = createReduxStore(initialState)

	return <Provider store={store}>{children}</Provider>
})
