Feature: Jira Cucumber.js Autotests

    Background:
        Given the user is authenticated

    Scenario: User is able to open Jira web-site
        When the user navigates to the Jira homepage
        Then the user is able to see its base content
        And the user No 5 is able to see its base content with 'image2.jpg' table
           | column1 | column2 |
           | value1  | value2  |