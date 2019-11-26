
Feature: Practice automation with shopping React website

  Feature Description
   Scenario: Buy only small T-shirts
    Given I launch the shopping site
    When I select all "small" T-shirts
    When I add all to cart
    Then I should checkout successfully
 