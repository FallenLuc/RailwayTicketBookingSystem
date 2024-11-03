import { useLocation } from "react-router"
import { useRef, useEffect } from "react"

export function useScrollToAnchor() {
	const location = useLocation()
	const lastHash = useRef("")

	useEffect(() => {
		if (location.hash) {
			lastHash.current = location.hash.slice(1)
		}

		if (lastHash.current && document.getElementById(lastHash.current)) {
			setTimeout(() => {
				document
					.getElementById(lastHash.current)
					?.scrollIntoView({ behavior: "smooth", block: "start" })
				lastHash.current = ""
			}, 100)
		}
	}, [location])

	return null
}
