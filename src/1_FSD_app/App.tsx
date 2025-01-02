import { RouterProvider } from "@providers/RouterProvider"
import { memo } from "react"

const App = memo(() => {
	return (
		<div className={"app"}>
			<RouterProvider />
		</div>
	)
})

export default App
