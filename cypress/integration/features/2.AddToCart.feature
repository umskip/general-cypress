@tag1 @tag2 @tag3
Feature: Add items to Cart

    Scenario: Add items to Cart and Checkout
        Given I open and navigate to the web page
        When I navigate to "Authentication" page
        And I make successful login

        Then I add "Jeans" to Cart
        And I add "Shirt" to Cart
        Then I add "Shoes" to Cart
        And I add "Backpack" to Cart
      
        Then I navigate to "Home" page
        And I Logout

