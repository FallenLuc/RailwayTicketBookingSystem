export { type formPassengersStateMap } from "./store/storeTypes/formPassengersState.map"
export {
	useFormPassengersActions,
	formPassengersReducer
} from "./store/slices/formPassengers.slice"
export {
	useGetFormPassengersInitedSelector,
	useGetFormPassengersDataSelector
} from "./store/selectors/getFormPassengersProperties/getFormPassengersProperties.selector"
