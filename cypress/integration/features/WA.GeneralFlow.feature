@tag1 @tag2 @tag3
Feature: Workaround - Add items to Cart

    Scenario: Add items to Cart
        Given I open and navigate to the web page
        
        Then I add "Jeans" to Cart
        And I add "Shirt" to Cart
        Then I add "Shoes" to Cart

        And I navigate to "Home" page

        When I Checkout and Pay the Items
        Then I validate the message
        
