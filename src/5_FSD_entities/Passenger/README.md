## Passenger

Сущность пассажира.

Тип данных пассажира:
* `types/passengerData.type.ts`
  * `passengerDataForPayType` - данные пассажира для отправки на сервер для оплаты
  * `fieldPassengerDataWithValidationType` - поле для заполнения с флагом валидности.
  * `passengerDataType` - данные пассажира для заполнения.

Фабрика моков:
* `libs/mocks/passengerData.mock.ts` - один пассажир
* `libg/mocks/passengerListData.mpock.ts` - несколько пассажиров

Компоненты:
* `components/PassengerInputCard` - Карточка пассажира для заполнения с возможностью валидации.
  * [story](/src/5_FSD_entities/Passenger/components/PassengerInputCard/PassengerInputCard.stories.tsx)
* `components/PassengerList` - Список карточек пассажиров с заполненными данными. Для отображения.
  * [story](/src/5_FSD_entities/Passenger/components/PassengersList/PassengersList.stories.tsx)

