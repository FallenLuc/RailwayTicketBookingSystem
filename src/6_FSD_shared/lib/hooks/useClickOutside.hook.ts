import type { RefObject } from "react"
import { useEffect } from "react"

export const useClickOutside = (ref: RefObject<HTMLElement | null>, callback: () => void) => {
	const handleClick = (event: MouseEvent) => {
		const eventTarget = event.target as HTMLElement

		if (!ref?.current?.contains(eventTarget)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener("click", handleClick)

		return () => {
			document.removeEventListener("click", handleClick)
		}
	})
}
