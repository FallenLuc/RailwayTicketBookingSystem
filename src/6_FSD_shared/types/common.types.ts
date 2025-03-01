import type { ReactNode } from "react"

export type showLimit = 5 | 10 | 20

export type paramsType<T extends string | number | boolean | undefined> = Record<string, T>

export type universalPageProps = {
	ErrorPage?: ReactNode
}
