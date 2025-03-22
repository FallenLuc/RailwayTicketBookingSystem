export {
	type carriageClassType,
	type carriagePriceType,
	type carriageDataType
} from "./types/carrriageData.type"
export { type seatDataType, type seatForPayType } from "./types/seatData.type"

//helpers
export { mapperCarriageTypeName } from "./lib/helpers/mapperCarriageTypeName/mapperCarriageTypeName.helper"
export { getMinPriceForSeat } from "./lib/helpers/getMinPriceForSeat/getMinPriceForSeat.helper"

//api
export { useGetCarriageInfoQuery } from "./api/getCarriageInfo.rtkq"

//components
export { CarriageInfo } from "./components/CarriageInfo/CarriageInfo"
