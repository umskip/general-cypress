const basePage = require('../page_objects/basePage.json')
const registerPage = require('../page_objects/registerPage.json')

Cypress.Commands.add('makeRegistration', () => {

    // Go to Register Tab
    cy.clickElement(`${basePage.registerTab}`)
    
    // Fill the fields
    cy.insertValue(`${registerPage.firstName}`, Cypress.env().json.registration.FIRST_NAME)
    cy.insertValue(`${registerPage.lastName}`, Cypress.env().json.registration.LAST_NAME)
    cy.insertValue(`${registerPage.email}`, Cypress.env().json.login.EMAIL)
    cy.insertValue(`${registerPage.password}`, Cypress.env().json.login.PASSWORD)
    cy.clickElement(`${registerPage.mrGender}`)

    //Click the Register Button
    cy.clickElement(`${registerPage.registerBtn}`)
})