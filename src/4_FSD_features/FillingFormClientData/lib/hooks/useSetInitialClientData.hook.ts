import { useInitialEffect } from "@hooks/useInitialEffect.hook"
import { useClientDataActions } from "../../store/slices/clientData.slice"

export function useSetInitialClientData() {
	const { initClientData } = useClientDataActions()

	useInitialEffect(initClientData)
}
