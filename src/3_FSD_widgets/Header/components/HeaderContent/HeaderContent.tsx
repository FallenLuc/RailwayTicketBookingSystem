import { memo, useMemo, useCallback } from "react"
import styles from "./HeaderContent.module.scss"
import { VStack, HStack } from "@ui/Stack"
import { ContainerLayout } from "@ui/layout"
import { TitleIcon } from "@assets/index"
import { DateInput } from "@features/DateInput"

export const HeaderContent = memo(() => {
	const onInput = useCallback((value: string) => {
		console.log(value)
	}, [])

	const date = useMemo(() => new Date("2024-12-12"), [])
	return (
		<VStack
			className={styles.content}
			justify={"flexEnd"}
			widthMax={true}
		>
			<ContainerLayout>
				<HStack
					align={"center"}
					justify={"flexEnd"}
				>
					<TitleIcon className={styles.title} />
					<div className={styles.fallbackSearch}>
						<DateInput
							onInput={onInput}
							value={date}
						/>
					</div>
				</HStack>
			</ContainerLayout>
		</VStack>
	)
})
