Проєкт включає API, інтеграційне тестування із застосуванням Cucumber.js, TypeScript, та репортингом через Allure.

Запуск тестів
    Встановити залежності: npm install

    Запуск API тестів: npm run test:api

    Запуск Integration тестів: npm run test:integration

    Генерація Allure репорту: npm run report:generate

    Відкрити Allure репорт: npm run report:open

CI/CD
    Автоматичний запуск тестів і публікація Allure репорту через GitHub Actions (test.yml).

Структура
    features/ — Gherkin сценарії

    src/steps/ — Step Definitions

    src/pages/ — Page Objects (для UI тестів)

    src/hooks/ — Cucumber hooks

    src/worlds/ — Custom World

Технології

    TypeScript

    Cucumber.js

    Node-fetch

    Allure Reports

    GitHub Actions