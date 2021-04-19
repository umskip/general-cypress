/// <reference types="Cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open and navigate to the web page', () => {
    cy.verifyPageUrl('URL')
});