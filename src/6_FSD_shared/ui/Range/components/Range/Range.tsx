import { TypedMemo } from "@sharedProviders/TypedMemo"
import { useCallback, useEffect, useState } from "react"
import { getTrackBackground, Range as RangeComponent } from "react-range"
import type { IRenderThumbParams, IRenderTrackParams } from "react-range/lib/types"
import { HStack, VStack } from "../../../Stack"
import { convertSecondsToTime } from "../../lib/helpers/convertSecondsToTime/convertSecondsToTime.helper"
import styles from "./Range.module.scss"

type RangeProps = {
	typeRange?: "default" | "time"
	className?: string
	range?: number[]
	min?: number
	max?: number
	onChange?: (value: number[]) => void
}

const STEP = 1

export const Range = TypedMemo((props: RangeProps) => {
	const { className, min = 0, max = 100000, range, onChange, typeRange = "default" } = props

	const [values, setValues] = useState(range || [min, max])

	const onFinalChangeHandler = useCallback(
		(range: number[]) => {
			onChange?.(range)
		},
		[onChange]
	)

	useEffect(() => {
		if (range) {
			setValues(range)
		}
	}, [range])

	const Track = ({ props, children }: IRenderTrackParams) => (
		<div
			className={styles.track}
			style={{ ...props.style }}
			onMouseDown={props.onMouseDown}
			onTouchStart={props.onTouchStart}
		>
			<div
				ref={props.ref}
				className={styles.fillTrack}
				style={{
					background: getTrackBackground({
						values,
						colors: ["transparent", "#ffa800", "transparent"],
						min: min,
						max: max
					})
				}}
			>
				{children}
			</div>
		</div>
	)

	const Thumb = ({ props, index }: IRenderThumbParams) => (
		<div
			{...props}
			className={styles.thumb}
		>
			<span className={styles.label}>
				{" "}
				{typeRange === "default" ? values[index] : convertSecondsToTime(values[index])}
			</span>
		</div>
	)

	return (
		<VStack
			className={className}
			gap={"gapXS"}
		>
			<HStack
				align={"center"}
				justify={"spaceBetween"}
				className={styles.header}
			>
				<span>{"От"}</span>
				<span>{"До"}</span>
			</HStack>
			<RangeComponent
				min={min}
				max={max}
				draggableTrack={true}
				step={STEP}
				onChange={setValues}
				onFinalChange={onFinalChangeHandler}
				renderThumb={Thumb}
				renderTrack={Track}
				values={values}
			/>
		</VStack>
	)
})
