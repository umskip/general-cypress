/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";


Then('I Register', () => {
    cy.makeRegistration()
});

Then('I make successful login', () => {
    cy.makeLogin()
});

Then('I Logout', () => {
    cy.Logout()
});

Then("I add {string} to Cart", (text) => {
    switch ((text).toLowerCase().trim()) {
        case "jeans":
            cy.addMenJeans()
            break
        
        case "shirt":
            cy.addMenShirt()
            break

        case "shoes":
            cy.addMenShoes()
            break
    }
})

Then('I validate the message', () => {
    cy.validateMessage()
});

