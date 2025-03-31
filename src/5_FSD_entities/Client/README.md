## Client

Сущность заказчика билетов.

Тип данных заказчика:
* `types/clientData.type.ts`:
  * `clientDataType` - данные о заказчике для заполнения.
  * `fieldClientDataWithValidationType` - поле для заполнения с флагом валидности.

Фабрика моков:
* `libs/mocks/clientData.mock.ts` - данные заказчика.

Компоненты:
* `components/ClientInputCard` - карточка пользователя для заполнения.
  * [story](/src/5_FSD_entities/Client/components/ClientInputCard/ClientInputCard.stories.tsx)
* `components/payMethod` - карточка способа оплаты для отображения.
  * [story](/src/5_FSD_entities/Client/components/PayMethod/PayMethod.stories.tsx)
