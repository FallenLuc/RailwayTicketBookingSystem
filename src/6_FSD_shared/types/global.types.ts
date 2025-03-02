import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit"

export type DeepPartial<T> =
	T extends object ?
		{
			[P in keyof T]?: DeepPartial<T[P]>
		}
	:	T

export type ValueTypes<T> = T extends object ? NonNullable<T[keyof T]> : never

export type OptionalRecord<K extends keyof any, T> = Partial<Record<K, T>>

export type AsyncThunkConfig = {
	state?: unknown
	dispatch?: ThunkDispatch<unknown, unknown, UnknownAction>
	extra?: unknown
	rejectValue?: unknown
	serializedErrorType?: unknown
	pendingMeta?: unknown
	fulfilledMeta?: unknown
	rejectedMeta?: unknown
}
