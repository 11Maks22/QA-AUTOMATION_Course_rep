@api
Feature: API Login to FOPHelp

  Scenario: Успішний логін користувача
    When я надсилаю POST-запит на "/api/react/Authenticate/login" з email "m.slobodianuk@gmail.com" і паролем "aN8\"bX6`cQ7;"
    Then я повинен отримати статус 200
    And відповідь повинна містити токен доступу
