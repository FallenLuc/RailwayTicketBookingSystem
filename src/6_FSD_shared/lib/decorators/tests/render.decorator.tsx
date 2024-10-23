import type { DeepPartial } from "@customTypes/global.types"
import { StoreProvider } from "@providers/StoreProvider"
import type { ReducersMapObject } from "@reduxjs/toolkit"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { mainStateAsyncMap } from "@store/storeTypes/mainStateAsync.map"
import type { RenderResult } from "@testing-library/react"
import { act, render } from "@testing-library/react"
import { type ReactNode } from "react"
import { MemoryRouter } from "react-router"

type optionsType = {
	route?: string
	initialState?: DeepPartial<mainStateMap>
	asyncReducers?: DeepPartial<ReducersMapObject<mainStateAsyncMap>>
}

export const renderDecorator = async (
	component: ReactNode,
	options: optionsType = {}
): Promise<RenderResult> => {
	const { initialState = {}, asyncReducers = {}, route = "/" } = options

	const Element = await act(async () =>
		render(
			<MemoryRouter initialEntries={[route]}>
				<StoreProvider
					initialState={initialState as mainStateMap}
					asyncReducers={asyncReducers as ReducersMapObject<mainStateAsyncMap>}
				>
					{component}
				</StoreProvider>
			</MemoryRouter>
		)
	)

	return Element
}
