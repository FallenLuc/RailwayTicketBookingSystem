import { ErrorBoundaryProvider } from "@providers/ErrorBoundaryProvider"
import { RouterProvider } from "@providers/RouterProvider"
import { memo } from "react"

const App = memo(() => {
	return (
		<div className={"app"}>
			<ErrorBoundaryProvider>
				<RouterProvider />
			</ErrorBoundaryProvider>
		</div>
	)
})

export default App
