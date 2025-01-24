import { buildCreateSelector } from "@helpers/buildCreateSelector/buildCreateSelector.helper"
import type { currentDirectionMapState } from "../../storeTypes/currentDirectionMapState.map"
import { getCurrentDirectionSelector } from "../getCurrentDirection/getCurrentDirection.selector"

export const [useGetCurrentDirectionToTripSelector, getCurrentDirectionToTripSelector] =
	buildCreateSelector(
		[getCurrentDirectionSelector],
		(state: currentDirectionMapState) => state?.toTrip
	)

export const [useGetCurrentDirectionFromTripSelector, getCurrentDirectionFromTripSelector] =
	buildCreateSelector(
		[getCurrentDirectionSelector],
		(state: currentDirectionMapState) => state?.fromTrip
	)
