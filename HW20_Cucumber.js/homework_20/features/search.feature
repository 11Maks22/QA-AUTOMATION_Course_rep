Feature: Book Search

  Scenario: Search for a book by title
    Given I open the OpenLibrary homepage
    When I search for "Dune"
    Then I should see results with the book title containing "Dune"

  Scenario: Search for a book by author name
    Given I open the OpenLibrary homepage
    When I search for "George Orwell"
    Then I should see results with the book title containing "1984"

  Scenario: Search with a non-existent book title
    Given I open the OpenLibrary homepage
    When I search for "asdkjashdkjahs"
    Then I should see a message that no books directly matched your search
