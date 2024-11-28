import { classNamesHelp } from "@helpers/classNamesHelp/classNamesHelp"
import { type HtmlHTMLAttributes, memo } from "react"
import { BarLoader } from "react-spinners"
import styles from "./FallBackLoader.module.scss"
import { VStack } from "../../../Stack"

type FallbackLoaderProps = {
	classNames?: string
} & HtmlHTMLAttributes<HTMLDivElement>

export const FallbackLoader = memo<FallbackLoaderProps>(props => {
	const { classNames, ...otherProps } = props

	return (
		<VStack
			align={"center"}
			justify={"center"}
			className={classNamesHelp(styles.FallBackLoader, {}, [classNames])}
			{...otherProps}
		>
			<BarLoader
				className={styles.loaderContent}
				color={"#FFA800"}
			/>
		</VStack>
	)
})
