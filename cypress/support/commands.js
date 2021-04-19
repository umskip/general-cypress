/// <reference types="Cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element)
        .should('be.visible')
        .click({
            multiple: true,
            force: true
        })
})

Cypress.Commands.add('checkElement', (element) => {
    cy.get(element)
        .should('be.visible')
        .check({
            multiple: true,
            force: true
        })
})

Cypress.Commands.add('clickText', (label) => {
    cy.contains(label)
        .should('be.visible')
        .click({
            multiple: true,
            force: true
        })
})

Cypress.Commands.add('verifyPageUrl', (text) => {
    cy.url().should('include', Cypress.env().json[text])
})

Cypress.Commands.add('insertValue', (element, value) => {
    cy.get(element)
        .should('be.visible')
        .type(value)
        .should('have.value', value)
})

Cypress.Commands.add('verifyText', (selector, value) => {
    cy.get(selector)
        .should('be.visible')
        .contains(value)
})

Cypress.Commands.add('generateRandomEmail', (element, stringLength, domain) => {
    cy.get(element).type(makeString())
    function makeString() {
        var randomString = "";
        var charachters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";

        for (var i = 0; i < stringLength; i++)
            randomString += charachters.charAt(Math.floor(Math.random() * charachters.length));

        return randomString + domain
    }
})

Cypress.Commands.add('selectRadioButton', (text, element) => {
    switch ((text).toLowerCase().trim()) {
        case "mr": case "mrs":
            cy.checkElement(element).should('be.checked')
            break
    }
})

Cypress.Commands.add('selectDropDownText', (element, text) => {
    cy.get(element).click(text)
})


