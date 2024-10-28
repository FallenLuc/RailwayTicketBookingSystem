import { memo } from "react"
import { RouterProvider } from "@providers/RouterProvider"

const App = memo(() => {
	return (
		<div className={"app"}>
			<RouterProvider />
		</div>
	)
})

export default App
