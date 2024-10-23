import { createRoot } from "react-dom/client"
import "@styles/index.style.scss"
import { RootComponent } from "./Root"

const rootElement = document.querySelector("#root") || document.body
const root = createRoot(rootElement)

root.render(<RootComponent />)
