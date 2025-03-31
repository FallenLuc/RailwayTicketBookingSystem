import { createSelector } from "@reduxjs/toolkit"
import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { useSelector } from "react-redux"

type selectorType<T> = (state: mainStateMap) => T
type reselectFuncType<T, L, Args extends any[]> = (state: T, ...args: Args) => L
type hookType<L, Args extends any[]> = (...args: Args) => L

type resultType<L, Args extends any[]> = [
	hookType<L, Args>,
	(...args: Args) => (state: mainStateMap) => L
]

/**
 * Кастомный createSelector, особенностью которого является то, что возвращает массив из функции, результатом которой будет мемоизированный селектор (Смотреть использование библиотеки [reselect](https://github-com.translate.goog/reduxjs/reselect?_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=lt)) и хука селектора, который можно использовать без dispatch. Основан на createSelector библиотеки reselect.
 * @param {selectorType<T>[]} selector - функция головного селектора.
 * @param {reselectFuncType<T, L, Args>} reselectFunc -  функция внутреннего селектора. Смотреть использование библиотеки [reselect](https://github-com.translate.goog/reduxjs/reselect?_x_tr_sl=auto&_x_tr_tl=ru&_x_tr_hl=lt)
 * @returns {resultType<L, Args>} - возвращает массив из хука мемоизированного селектора и функции, которая возвращает мемоизированный селектор (может принимать дополнительные аргументы). Смотреть использование библиотеки reselect.
 * @returns [useMemoSelect, (arg) => memoSelect(arg)]
 */

export function buildCreateSelector<T, L, Args extends any[]>(
	selector: selectorType<T>[],
	reselectFunc: reselectFuncType<T, L, Args>
): resultType<L, Args> {
	const generalSelector = (...args: Args) =>
		createSelector(selector, (state: T) => reselectFunc(state, ...args))

	const useAppCreateSelector: hookType<L, Args> = (...args: Args) => {
		const generalSelectorWithArgs = generalSelector(...args)

		return useSelector(generalSelectorWithArgs)
	}

	return [useAppCreateSelector, generalSelector]
}
