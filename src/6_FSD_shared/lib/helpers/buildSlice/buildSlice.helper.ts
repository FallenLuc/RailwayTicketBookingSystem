import { useAppDispatch } from "@hooks/useAppDispatch.hook"
import type {
	CaseReducerActions,
	CreateSliceOptions,
	Slice,
	SliceCaseReducers,
	SliceSelectors
} from "@reduxjs/toolkit"
import { bindActionCreators, createSlice } from "@reduxjs/toolkit"
import { useMemo } from "react"

/**
 * Кастомный slice сreator. Особенностью является дополнитльный возвращаемый параметр useActions. Внутри него хранятся actions, которые можно использовать без вызова использования dispatch. Их просто можно вызывать в любом месте компонента, а вызов dispatch зашит внутри кастомной обертки.
 * @param {CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>} options - такие же параметры, как и у createSlice из reduxToolkit
 * @returns {Slice<State, CaseReducers, Name, ReducerPath, Selectors> & {useActions: () => CaseReducerActions<CaseReducers, Name>}} -  все тоже самое, что возвращает reduxToolkit, только дополнительное поле useActions с actions - кастомными обертками над обычными actions, которые можно использоватье без вызова dispatch.
 */

export function buildSlice<
	State,
	CaseReducers extends SliceCaseReducers<State>,
	Name extends string,
	Selectors extends SliceSelectors<State>,
	ReducerPath extends string = Name
>(
	options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>
): Slice<State, CaseReducers, Name, ReducerPath, Selectors> & {
	useActions: () => CaseReducerActions<CaseReducers, Name>
} {
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
