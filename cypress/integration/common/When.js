/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When("I navigate to {string} page", (text) => {
    switch ((text).toLowerCase().trim()) {
        case "authentication":
            cy.Authentication()
            break
        
        case "home":
            cy.Home()
            break
    }
})

When('I Checkout and Pay the Items', () => {
    cy.makeCheckout()
});

