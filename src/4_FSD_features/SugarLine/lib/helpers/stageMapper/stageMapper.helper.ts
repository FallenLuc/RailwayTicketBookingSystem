import type { stageType } from "../../../components/SugarLine/SugarLine"
import { stages } from "../../../constants/stages.constant"

export const stageMapper = (stage: stageType) => {
	const index = Object.keys(stages).findIndex(st => st === stage)

	return { number: index + 1, name: stages[stage] }
}
