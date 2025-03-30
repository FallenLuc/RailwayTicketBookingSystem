import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import type { CreateSliceOptions, SliceCaseReducers, SliceSelectors } from "@reduxjs/toolkit"
import { bindActionCreators, createSlice } from "@reduxjs/toolkit"
import { useMemo } from "react"

export function buildSlice<
	State,
	CaseReducers extends SliceCaseReducers<State>,
	Name extends string,
	Selectors extends SliceSelectors<State>,
	ReducerPath extends string = Name
>(options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>) {
	const slice = createSlice(options)

	const useActions = () => {
		const dispatch = useAppDispatch()

		const boundActionCreators = useMemo(
			() => bindActionCreators(slice.actions, dispatch),
			[dispatch]
		)

		return boundActionCreators
	}

	return { ...slice, useActions }
}
