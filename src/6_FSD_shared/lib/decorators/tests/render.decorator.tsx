import type { DeepPartial } from "@customTypes/global.types"
import { StoreProvider } from "@providers/StoreProvider"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { RenderResult } from "@testing-library/react"
import { act, render } from "@testing-library/react"
import { type ReactNode } from "react"
import { MemoryRouter } from "react-router"

type optionsType = {
	route?: string
	initialState?: DeepPartial<mainStateMap>
}

export const renderDecorator = async (
	component: ReactNode,
	options: optionsType = {}
): Promise<RenderResult> => {
	const { initialState = {}, route = "/" } = options

	const Element = await act(async () =>
		render(
			<MemoryRouter initialEntries={[route]}>
				<StoreProvider initialState={initialState as mainStateMap}>
					{component}
				</StoreProvider>
			</MemoryRouter>
		)
	)

	return Element
}
