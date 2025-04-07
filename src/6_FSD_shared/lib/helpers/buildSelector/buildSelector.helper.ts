import type { mainStateMap } from "@store/storeTypes/mainState.map"
import { useCallback } from "react"
import { useSelector } from "react-redux"

type selectorType<T, Args extends any[]> = (state: mainStateMap, ...args: Args) => T
type hookType<T, Args extends any[]> = (...args: Args) => T
type resultType<T, Args extends any[]> = [hookType<T, Args>, selectorType<T, Args>]

/**
 * Обертка для селектора, которая возвращает сам селектор, и хук селектора, который можно использовать без dispatch
 * @param {selectorType<T, Args>} selector - функция селектора
 * @returns {resultType<T, Args>} - массив из функция селектора и хука селектора [useSelector, selector]
 */

export function buildSelector<T, Args extends any[]>(
	selector: selectorType<T, Args>
): resultType<T, Args> {
	const useAppSelector = (...args: Args) =>
		useSelector(useCallback((state: mainStateMap) => selector(state, ...args), [args]))

	return [useAppSelector, selector]
}
