export type Mods = Record<string, string | boolean | undefined>

/**
 * Упрощает работу с классами для react компонентов.
 * @param {string} cls - основной класс.
 * @param {Mods} mods - объект для динамических классов. формат {class: true} - если true класс добавится, если false - класс не будет добавляться.
 * @param {(string | undefined)[]} additional - массив дополнительных классов.
 * @returns {string} - итоговая строка, которая содержит классы. "class1 class2 class3"
 */

export function classNamesHelp(
	cls?: string,
	mods?: Mods,
	additional?: (string | undefined)[]
): string {
	return [
		cls,
		...(additional || []).filter(cls => Boolean(cls)),
		...Object.entries(mods || {})
			.filter(([_, status]) => Boolean(status))
			.map(([clsName]) => clsName)
	].join(" ")
}
