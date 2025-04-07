## Carriage

Сущность вагона.

Тип данных вагона:
* `types/carriageData.type.ts`
  * `carriagePriceType` - тип информации с ценами разных сидений и услуг вагона
  * `carriageClassType` - возможные варианты класса вагона.
  * `carriageDataType` - тип данных вагона
  * `carriageDataFromServerType` - тип данных вагона которые приходят с сервера
* `types/seatData.type.ts`
  * `seatDataType` - тип данных одного места в вагоне.
  * `seatForPayType` - тип данных одного места в вагоне для отправки на сервер при оплате.

Фабрика моков:
* `libs/mocks/carriageData.mock.ts`
  * `carriageDataMock` - данные одного вагона
  * `carriageDataFromServerMock` - данные одного вагона с сервера.
* `libs/mocks/seatsDataMock.mock.ts` - массив с местами внутри вагона.

Хэлперы:
* `libs/helpers/mapperCarriageTypeName.helper.ts` - функция сопоставления класса вагона с названием класса вагона.
* `libs/helpers/getMinPriceForSeat.helper.ts` - функция выбора минимальной цены одного места внутри вагона.

api:
* `api/getCarriageInfoRtkq` -  получение информации о вагоне.

Компоненты:
* `components/CarriageInfo`- карточка с информацией о вагоне (для отображения)
  * [story](/src/5_FSD_entities/Carriage/components/CarriageInfo/CarriageInfo.stories.tsx) 
