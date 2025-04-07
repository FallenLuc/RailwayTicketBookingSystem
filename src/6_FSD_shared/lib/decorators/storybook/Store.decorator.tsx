import { type DeepPartial } from "@customTypes/global.types"
import { StoreProvider } from "@providers/StoreProvider"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import type { Decorator } from "@storybook/react"

export const StoreDecorator = (initialState: DeepPartial<mainStateMap>): Decorator => {
	return Story => {
		const state: DeepPartial<mainStateMap> = initialState

		return (
			<StoreProvider initialState={state as mainStateMap}>
				<Story />
			</StoreProvider>
		)
	}
}
