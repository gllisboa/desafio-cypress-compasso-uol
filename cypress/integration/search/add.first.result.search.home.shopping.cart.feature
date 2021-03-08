
Feature: Insert products to the shopping cart from the search result on the home page

  Scenario: Add the first search result for product  'Faded Short Sleeve'
    Given acess to home page
      And select first result on dropdown
      And select products options
    When I add a product 'Faded Short Sleeve' to the shoping cart from the first search result
    Then the product is added to my shoping cart
