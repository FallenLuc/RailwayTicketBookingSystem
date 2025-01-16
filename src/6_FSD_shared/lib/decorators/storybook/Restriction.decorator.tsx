import type { Decorator } from "@storybook/react"

export const RestrictionDecorator =
	(typeRestrict: "default" | "large" = "default"): Decorator =>
	Story => {
		return (
			<div
				className={
					typeRestrict === "default" ? "restriction-container" : (
						"restriction-container-large"
					)
				}
			>
				<Story />
			</div>
		)
	}
