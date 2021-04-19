@tag1 @tag2 @tag3
Feature: Add items to Cart

    Scenario: Add items to Cart and Checkout
        Given I open and navigate to the web page
        When I navigate to "Authentication" page
        And I make successful login
        
        When I Checkout and Pay the Items
        Then I validate the message

        And I navigate to "Home" page
        Then I Logout
