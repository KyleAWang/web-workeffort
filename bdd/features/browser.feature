Feature: Searching from cucumbers
  As an internet user
  In order to find out more about cucmbers
  I want to be able to search for information about cucumbers

  Scenario: Google cucumber serach
    When I search Google for 'cucumbers'
    Then I should see some results