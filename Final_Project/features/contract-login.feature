@contract
Feature: API Contract for Login Response

  Scenario: Структура відповіді на логін правильна
    When я надсилаю POST-запит на "/api/react/Authenticate/login" з email "m.slobodianuk@gmail.com" і паролем "aN8\"bX6`cQ7;"
    Then відповідь повинна містити поле "token" 
