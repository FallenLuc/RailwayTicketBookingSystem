## Direction

Сущность направления.

Тип данных направления:
* `types/directionData.type.ts`
  * `directionDataType` - данные одного направления.
  * `directionGeneralDataType` - данные набора направлений (arrival + departure), которые пришли с сервера + id.
  * `directionGeneralDataFromServerType` - данные набора направлений (arrival + departure), которые пришли с сервера.
  * `directionsDataFromServerType` - данные с массивом наборов направлений (arrival + departure), и количеством, которые пришли с сервера.
* `types/directionFormParametres.type.ts`
  * directionFormParametres - данные формы для поиска наборов направлений.

Store:
* directionList - состояние списка найденных наборов направлений.

api:
* `api/getDirectionsRtkq` - запрос для поиска наборов направлений.

Фабрика моков:
* `lib/mocks/directionData.mock.ts` - данные одного направления
* `lib/mocks/directionGeneralData.mock.ts` - данные набора направлений (arrival + departure)
* `lib/mocks/directionListData.mock.ts` - список наборов направлений (arrival+departure)

Компоненты:
* `components/DirectionCard` - карточка набора направлений. Имеет два вида компактный и полноценный.
  * [story](/src/5_FSD_entities/Direction/components/DirectionCard/DirectionCard.stories.tsx)
* `components/DirectionIndo` - информация об одном направлении. Отображение инфо.
  * [story](/src/5_FSD_entities/Direction/components/DirectionInfo/DirectionInfo.stories.tsx)
