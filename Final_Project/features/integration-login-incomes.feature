@integration
Feature: Integration test: login + access to earnings

  Scenario: Користувач може залогінитись і отримати свої прибутки
    Given я авторизуюсь через API
    When я надсилаю GET-запит на "/api/react/Income"
    Then я повинен отримати статус 200
    And відповідь повинна містити список прибутків
