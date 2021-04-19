const basePage = require('../page_objects/basePage.json')

// Go to Auth Page
Cypress.Commands.add('Authentication', () => {
    cy.get(`${basePage.userIcon}`).click()
})

// Go to Home Page
Cypress.Commands.add('Home', () => {
    cy.get(`${basePage.home}`).click()
})

// Logout
Cypress.Commands.add('Logout', () => {
    cy.get(`${basePage.logout}`).click()
})