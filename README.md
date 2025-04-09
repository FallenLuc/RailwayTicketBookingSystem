# 🚂 Railway Ticket Booking System

## 📝 Description
**Railway Ticket Booking System** - дипломный проект курсов по Frontend разработке онлайн университета "Нетология".

👨💻 **Автор**: Студент онлайн университета Кувашов Никита

🛠 **Использованные ресурсы**:
* 📚 [Справочные материалы Нетологии](https://github.com/netology-code/fe-2-diplom/tree/master)
* 🎨 [Дизайн в Figma](https://www.figma.com/file/7981GjEsjSpBUKolk4xFoT/Заказ-билетов?node-id=0%3A1)
* ⚙️ [API BackEnd](https://github.com/netology-code/fe-2-diplom/blob/master/reference/api.md)

## 🛡️ Project Status

![Lint](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/lint.yml/badge.svg?branch=dev)
![Unit](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/unit.yml/badge.svg?branch=dev)
![Ui](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/ui.yml/badge.svg?branch=dev)
![Deploy](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/deploy.yml/badge.svg?branch=dev)

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://dev--67c5d5923b070e7bf5bb63e1.chromatic.com)

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://fallenluc.github.io/RailwayTicketBookingSystem/)

## 🚀 Scripts

* 🏗️ `pnpm run build:start:dev` - Запуск Webpack dev server (http://localhost:8081)
* 📦 `pnpm run build:dev` - Сборка в development режиме
* 📦 `pnpm run build:prod` - Продакшн сборка с минификацией
* 🔍 `pnpm run lint:ts` - Проверка TypeScript кода
* 🔧 `pnpm run lint:ts:fix` - Автоисправление TS ошибок
* 🎨 `pnpm run lint:style` - Проверка SCSS стилей
* 🖌️ `pnpm run lint:style:fix` - Автоисправление стилей
* 💅 `pnpm run lint:prettier` - Форматирование кода Prettier
* 🧪 `pnpm run test:unit` - Запуск unit-тестов
* 📸 `pnpm run test:ui` - Скриншотные тесты в Chromatic
* 📚 `pnpm run storybook:start` - Запуск Storybook (http://localhost:6006)
* 📚 `pnpm run storybook:build` - Сборка Storybook
* ⚙️ `pnpm run prepare` - Запуск pre-commit хуков

## 🏗️ Architecture

[![Feature Sliced Design](https://img.shields.io/badge/Architecture-Feature_Sliced_Design-007EC6?style=flat-square&logo=typescript&logoColor=white)](https://feature-sliced.github.io/documentation/docs)

Проект реализован по методологии **Feature Sliced Design** 🧩

Собственные модификации методологии:  
🔹 Слои именуются как `Number_FSD_NameFolder`, где Number - это уровень слоя по FSD, а NameFolder - название слоя по FSD.  
🔹 Для UI компонентов используется public API  
🔹 Сложные компоненты могут иметь собственную папку ui, в которых будут храниться более мелки части компонента. Именно верстка без логики. Пример в [RangeTimeDirections](/src/4_FSD_features/RangeTimeDirections/components/Footer/ui/RangeWithTitle/RangeWithTitle.tsx)
🔹 Папка `store` вместо `model`  
🔹 Типы хранятся в `storeTypes`

📚 [Документация FSD](https://feature-sliced.github.io/documentation/docs)

## 🔗 Aliases & Configs

### 📂 Aliases
В проекте используются алиасы. Алиасы указаны в [tsconfig.paths.json](/tsconfig.paths.json)

Для добавления нового алиса, достаточно указать его в tsconfig.paths.json и он будет сразу же работать, так как в webpack, storybook, jest настроено автоматическое распознавание алиасов на основе tsconfig.paths.json.
Алиасы настроены на все папки в корне проекта, и на все папки в слое shared и app.

```json
{
  "paths": {
    "@/*": ["./*"],
    "@public/*": ["./public/*"],
    "@_storybook/*": ["./config/storybook/*"],
    "@_jest/*": ["./config/jest/*"],
    "@_webpack/*": ["./config/webpack/*"],
    "@src/*": ["./src/*"],
	
    "@app/*": ["./src/1_FSD_app/*"],
    "@providers/*": ["./src/1_FSD_app/providers/*"],
    "@store/*": ["./src/1_FSD_app/store/*"],
    "@styles/*": ["./src/1_FSD_app/styles/*"],
    
    "@pages/*": ["./src/2_FSD_pages/*"],
    "@widgets/*": ["./src/3_FSD_widgets/*"],
    "@features/*": ["./src/4_FSD_features/*"],
    "@entities/*": ["./src/5_FSD_entities/*"],
    
    "@ui/*": ["./src/6_FSD_shared/ui/*"],
    "@constants/*": ["./src/6_FSD_shared/constants/*"],
    "@api/*": ["./src/6_FSD_shared/api/*"],
    "@assets/*": ["./src/6_FSD_shared/assets/*"],
    "@config/*": ["./src/6_FSD_shared/config/*"],
    "@customTypes/*": ["./src/6_FSD_shared/types/*"],
    "@sharedProviders/*": ["./src/6_FSD_shared/providers/*"],
    
    "@decorators/*": ["./src/6_FSD_shared/lib/decorators/*"],
    "@helpers/*": ["./src/6_FSD_shared/lib/helpers/*"],
    "@mocks/*": ["./src/6_FSD_shared/lib/mocks/*"],
    "@hooks/*": ["./src/6_FSD_shared/lib/hooks/*"]
  }
}
```

### ⚙️ Configs
Для разработки проекта используется сборщик Webpack. Конфигурация написана на typescript и разделена на модули.

* [Вызов конфигурационной функции](/webpack.config.ts)
* [Основной конфиг](/config/webpack/config.webpack.ts) - конфигурационная функция, которая принимает параметры запуска сборки и агрегирует в себя все модули.
* [Resolvers](/config/webpack/resolvers.webpack.ts) - модуль, отвечающий за резолверы webpack.
* [Plugins](/config/webpack/plugins.webpack.ts) - модуль, отвечающий за все плагины webpack.
* [Loaders](/config/webpack/loaders.webpack.ts) - модуль, отвечающий за лоадеры webpack.
* [Optimization](/config/webpack/optimization.webpack.ts) - модуль, отвечающий за минимизацию кода в webpack.
* [DevServer](/config/webpack/devServer.webpack.ts) -  модуль отвечающий за dev server.

Для babel был написан собственный [плагин](/plugins/babel/removeAttributePlugin.babel.ts), который удаляет тестовые props компонентов при production сборке.

Для тестирования используется jest.
* [Конфиг](/config/jest/jest.config.ts) jest

Для скриншотных тестов используется storybook и chromatic.
* [Конфиг](/chromatic.config.json) chromatic
* [Конфиг](/config/storybook/main.ts) storybook

## 🧪🧹 Testing & Linting

### 🧪 Тесты

```bash
# Unit тесты - unit тесты, для тестирования helpers, slices, selectors. Тесты написаны на базе jest.
$ pnpm run test:unit

# Скриншотные тесты - ui тесты, скриншотные тесты на основе storybook компонентов на базе приложения 
$ pnpm run test:ui
```

### 🧹 Линтеры
| Инструмент | Конфигурация                            |
|------------|-----------------------------------------|
| ESLint     | [`.eslintrc.json`](/.eslintrc.json)     |
| Stylelint  | [`.stylelintrc.js`](/.stylelintrc.js)   |
| Prettier   | [`.prettierrc.json`](/.prettierrc.json) |

## 📚 Storybook 

В проекте для каждого компонента описываются story-cases.

Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со story-cases создается рядом с компонентом с расширением .stories.tsx

```bash
# Запуск Storybook
$ pnpm run storybook:start
```

Подробнее о [Storybook](https://storybook.js.org/docs)

## 🔄 CI/CD Pipeline

![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?logo=github-actions&logoColor=white)

Конфигурация github actions находится в `/.github/workflows`. 

### CI
* Выполняется unit тестирование
* Выполняется ui тестирование
* Выполняется проверка линтерами

### CD 
* Выполняется deploy проекта на github-actions
* Создается release в github при добавлении тега версии.

### pre-commit hooks
В pre-commit хуках проверяем проект линтерами
* [конфиг](/.husky/pre-commit) pre-commit хуков

## 📊 Work with Data

![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?logo=redux&logoColor=white)

* Основной store: [/src/1_FSD_app/store/store.ts](/src/1_FSD_app/store/store.ts) - Взаимодействие с данными осуществляется с помощью redux toolkit.
* RTK Query API: [/src/6_FSD_shared/api/instances/rtkBase.api.ts](/src/6_FSD_shared/api/instances/rtkBase.api.ts) - Запросы на сервер
* Entity Adapters - для работы со списками данных такими как Directions и Passengers используется entityAdapter.


## 🏛️ Entities
* [Carriage](/src/5_FSD_entities/Carriage/README.md)
* [City](/src/5_FSD_entities/City/README.md)
* [Client](/src/5_FSD_entities/Client/README.md)
* [Direction](/src/5_FSD_entities/Direction/README.md)
* [Passenger](/src/5_FSD_entities/Passenger/README.md)
* [Station](/src/5_FSD_entities/Station/README.md)
* [Train](/src/5_FSD_entities/Train/README.md)

## 🛠️ Helpers
* [buildSelector](/src/6_FSD_shared/lib/helpers/buildSelector/buildSelector.helper.ts)
* [buildCreateSelector](/src/6_FSD_shared/lib/helpers/buildCreateSelector/buildCreateSelector.helper.ts)
* [buildSlice](/src/6_FSD_shared/lib/helpers/buildSlice/buildSlice.helper.ts)
* [classNamesHelp](/src/6_FSD_shared/lib/helpers/classNamesHelp/classNamesHelp.ts)
* [colorMapper](/src/6_FSD_shared/lib/helpers/colorMapper/colorMapper.helper.ts)
* [fontMapper](/src/6_FSD_shared/lib/helpers/fontMapper/fontMapper.helper.ts)
* [convertHourToSeconds](/src/6_FSD_shared/lib/helpers/convertHourToSeconds/convertHourToSeconds.helper.ts)
* [convertSecondsToHour](/src/6_FSD_shared/lib/helpers/convertSecondsToHour/convertSecondsToHour.helper.ts)
* [convertSecondsToTime](/src/6_FSD_shared/lib/helpers/convertSecondsToTime/convertSecondsToTime.helper.ts)
* [convertUnixToDate](/src/6_FSD_shared/lib/helpers/convertUnixToDate/convertUnixToDate.helper.ts)
* [createLinkWithParams](/src/6_FSD_shared/lib/helpers/createLinkWithParams/createLinkWithParams.helper.ts)
* [parseFormDataFromUrl](/src/6_FSD_shared/lib/helpers/parseFormDataFromUrl/parseFormDataFromUrl.helper.ts)
* [addQueryParams](/src/6_FSD_shared/lib/helpers/addQueryParams/addQueryParams.helper.ts)

## 🪝 Hooks
* [useAppDispatch](/src/6_FSD_shared/lib/hooks/useAppDispatch.hook.ts) - типизированный хук useDispatch.
* [useClickOutside](/src/6_FSD_shared/lib/hooks/useClickOutside.hook.ts) - хук, позволяющий добавить вызов callback на событие клика вне компонента.
* [useDebounce](/src/6_FSD_shared/lib/hooks/useDebounce.hook.ts) - хук, позволяющий вызывать callback не чаще переданного в хук delay.
* [useInitialEffect](/src/6_FSD_shared/lib/hooks/useInitialEffect.hook.ts) - хук, вызывающий callback только при монтировании компонента.
* [useModal](/src/6_FSD_shared/lib/hooks/useModal.hook.ts) - хук, с базовыми настройками для управления модальными окнами.
* [useScrollToAnchor](/src/6_FSD_shared/lib/hooks/useScrollToAnchor.hook.ts) - хук, добавляющий плавный scroll компонента по нажатию на якорную ссылку.
