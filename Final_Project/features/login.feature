@ui
Feature: User login to FOPHelp

Scenario: Користувач успішно авторизується на сайті FOPHelp
  Given я відкриваю головну сторінку FOPHelp
  When я клікаю на кнопку "Увійти"
  And я вводжу email "m.slobodianuk@gmail.com"
  And я вводжу пароль "aN8\"bX6\`cQ7;"
  And я натискаю кнопку входу
  Then я повинен побачити, що авторизація пройшла успішно

