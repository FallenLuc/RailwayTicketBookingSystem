import { stages } from "../../../constants/stages.constant"
import type { stageType } from "../../../types/stageType.type"

export const stageMapper = (stage: stageType) => {
	const index = Object.keys(stages).findIndex(st => st === stage)

	return { number: index + 1, name: stages[stage] }
}
