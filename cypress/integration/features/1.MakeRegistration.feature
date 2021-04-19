@tag1 @tag2 @tag3
Feature: Make Registration

    Scenario: Navigate to the webpage and make successful registration
        Given I open and navigate to the web page
        When I navigate to "Authentication" page
        And I Register 

        Then I navigate to "Home" page
        And I Logout

