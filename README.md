# Railway Ticket Booking System

## Description
Railway Ticket Booking System - дипломный проект курсов по Frontend разработке онлайн университета "Нетология".

Проект был выполнен студентом онлайн университета Кувашовым Никитой.

Для выполнения использовались:
* [Справочные материалы Нетологии.](https://github.com/netology-code/fe-2-diplom/tree/master)
* [Дизайн](https://www.figma.com/file/7981GjEsjSpBUKolk4xFoT/Заказ-билетов?node-id=0%3A1)
* [APi BackEnd](https://github.com/netology-code/fe-2-diplom/blob/master/reference/api.md)

## Labels

![Lint](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/lint.yml/badge.svg?branch=PR-actual)

![Unit](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/unit.yml/badge.svg?branch=PR-actual)

![Ui](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/ui.yml/badge.svg?branch=PR-actual)

![Deploy](https://github.com/FallenLuc/RailwayTicketBookingSystem/actions/workflows/deploy.yml/badge.svg?branch=PR-actual)

[![Storybook](https://img.shields.io/badge/-Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://PR-actual--67c5d5923b070e7bf5bb63e1.chromatic.com)

[![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)](https://fallenluc.github.io/RailwayTicketBookingSystem/)

## Scripts
* `build:start:dev` - Запустить сборку Webpack для разработки. Запускается dev server по адресу http://localhost:8081/.
* `build:dev` - Собрать проект в режиме development. Без минимизации. Сборка помещается в корень в папку build.
* `build:prod` - Собрать проект в режиме production. Проект минимизируется. Сборка помещается в корень в папку build.
* `lint:ts` - Запустить линтер для проверки typescript кода согласно правилам eslint.
* `lint:ts:fix` - Запустить линтер для проверки typescript кода, согласно правилам eslint с автоматическим исправлением ошибок, которые можно исправить.
* `lint:style` - Запустить линтер для проверки scss кода, согласно правилам stylelint.
* `lint:style:fix` - Запустить линтер для проверки scss кода, согласно правилам stylelint с автоматическим исправлением ошибок, которые можно исправить.
* `lint:prettier` - Запустить форматирование проекта согласно правилам prettier c флагом --write.
* `test:unit` - Запустить unit тесты по всему проекту.
* `test:ui` - Запустить скриншотные тесты через chromatic.
* `storybook:start` - Запустить сборку storybook. Запускается dev server по адресу http://localhost:6006/.
* `storybook:build` - Собрать storybook. Используется для скриншотных тестов.
* `prepare` - запустить pre-commit хук husky. Внутри запускаются линтеры на ts и scss с флагом --fix и prettier.

## Architecture

Проект написан в соответствии с методологией Feature sliced design.

Особенности, которые могут встречаться в проекте в отрыве от методологии:
* Название папок имеет префикс `Number_FSD_NameFolder`, где Number - это уровень слоя по FSD, а NameFolder - название слоя по FSD.
* Для ui в shared слое тоже используется public api.
* Сложные компоненты могут иметь собственную папку ui, в которых будут храниться более мелки части компонента. Именно верстка без логики. Пример в [RangeTimeDirections](/src/4_FSD_features/RangeTimeDirections/components/Footer/ui/RangeWithTitle/RangeWithTitle.tsx)
* Папка model не используется, вместо нее -- папка store.
* Для типов, которые относятся именно к store используется внутри store папка storeTypes, пример в [Direction](src/5_FSD_entities/Direction/store/storeTypes/directionsListState.map.ts)

Ссылка на документацию - [feature sliced design](https://feature-sliced.github.io/documentation/docs)

## Aliases
В проекте используются алиасы. Алиасы указаны в [tsсonfig.paths.json](/tsconfig.paths.json)
Для добавления нового алиса, достаточно указать его в tsconfig.paths.json и он будет сразу же работать, так как в webpack, storybook, jest настроено автоматическое распознавание алиасов на основе tsconfig.paths.json.
Алиасы настроены на все папки в корне проекта, и на все папки в слое shared и app.

## Configs

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

## Tests
В проекте используются два типа тестов.
* unit тесты, для тестирования helpers, slices, selectors. Тесты написаны на базе jest. Запустить - `pnpm run test:unit`
* ui тесты, скриншотные тесты на основе storybook компонентов на базе приложения chromatic - запустить `pnpm run test:ui`
  * Конфигурация [chromatic](/chromatic.config.json)

## Linting
В проекте используется eslint для отслеживания чистоты кода на ts/tsx и stylelint для отслеживания чистоты кода на scss. Также, для форматирования кода используется prettier.
* Конфиг [eslint](/.eslintrc.json)
* Конфиг [stylelint](/.stylelintrc.js)
* Конфиг [prettier](/.prettierrc.json)

## Storybook 

В проекте для каждого компонента описываются story-cases.

Запросы на сервер мокаются с помощью storybook-addon-mock.

Файл со story-cases создается рядом с компонентом с расширением .stories.tsx

Запустить storybook можно командой:

* `pnpm run storybook:start`

Подробнее о [Storybook](https://storybook.js.org/docs)

## Cl/CD pipeline and pre commit hooks
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

## Work with Data
Взаимодействие с данными осуществляется с помощью redux toolkit.
* [main-store](/src/1_FSD_app/store/store.ts)

Для работы со списками данных такими как Directions и Passengers используется entityAdapter.

Запросы на сервер отправляются с помощью RTK query
* api [instance](/src/6_FSD_shared/api/instances/rtkBase.api.ts)


## Entities
* [Carriage](/src/5_FSD_entities/Carriage/README.md)
* [City](/src/5_FSD_entities/City/README.md)
* [Client](/src/5_FSD_entities/Client/README.md)
* [Direction](/src/5_FSD_entities/Direction/README.md)
* [Passenger](/src/5_FSD_entities/Passenger/README.md)
* [Station](/src/5_FSD_entities/Station/README.md)
* [Train](/src/5_FSD_entities/Train/README.md)

## Helpers
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

## Hooks
* [useAppDispatch](/src/6_FSD_shared/lib/hooks/useAppDispatch.hook.ts) - типизированный хук useDispatch.
* [useClickOutside](/src/6_FSD_shared/lib/hooks/useClickOutside.hook.ts) - хук, позволяющий добавить вызов callback на событие клика вне компонента.
* [useDebounce](/src/6_FSD_shared/lib/hooks/useDebounce.hook.ts) - хук, позволяющий вызывать callback не чаще переданного в хук delay.
* [useInitialEffect](/src/6_FSD_shared/lib/hooks/useInitialEffect.hook.ts) - хук, вызывающий callback только при монтировании компонента.
* [useModal](/src/6_FSD_shared/lib/hooks/useModal.hook.ts) - хук, с базовыми настройками для управления модальными окнами.
* [useScrollToAnchor](/src/6_FSD_shared/lib/hooks/useScrollToAnchor.hook.ts) - хук, добавляющий плавный scroll компонента по нажатию на якорную ссылку.
