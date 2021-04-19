const basePage = require('../page_objects/basePage.json')
const loginPage = require('../page_objects/loginPage.json')

Cypress.Commands.add('makeLogin', () => {

    // Go to Login Tab
    cy.clickElement(`${basePage.loginTab}`)

    // Enter Credentials
    cy.insertValue(`${loginPage.emailField}`, Cypress.env().json.login.EMAIL)
    cy.insertValue(`${loginPage.passwordField}`, Cypress.env().json.login.PASSWORD)

    //Click the Login Button
    cy.clickElement(`${loginPage.loginBtn}`)
})