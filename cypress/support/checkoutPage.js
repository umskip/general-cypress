const checkoutPage = require('../page_objects/checkoutPage.json')
const basePage = require('../page_objects/basePage.json')

Cypress.Commands.add('makeCheckout', () => {
    cy.get(`${basePage.basket}`).click()
    cy.clickElement(`${checkoutPage.finalizeOrderBtn}`)

    // Checkout Login Popup
    cy.get(`${checkoutPage.continiueAsGuestBtn}`).click()
    cy.insertValue(`${checkoutPage.firstNameGuestField}`, Cypress.env().json.registration.FIRST_NAME)
    cy.insertValue(`${checkoutPage.lastNameGuestField}`, Cypress.env().json.registration.LAST_NAME)
    cy.insertValue(`${checkoutPage.emailGuestField}`, Cypress.env().json.login.EMAIL)
    cy.get(`${checkoutPage.mrGenderGuest}`).click()
    cy.get(`${checkoutPage.continiueAsGuestBtn2}`).click({force: true})
    
    // Continue Checkout 1st Page
    cy.insertValue(`${checkoutPage.addressField}`, Cypress.env().json.checkout.ADDRESS)
    cy.insertValue(`${checkoutPage.eirCodeField}`, Cypress.env().json.checkout.EIRCODE)
    cy.insertValue(`${checkoutPage.cityField}`, Cypress.env().json.checkout.CITY)
    cy.insertValue(`${checkoutPage.DOB}`, Cypress.env().json.checkout.DOB)
    cy.get(`${checkoutPage.continueToPaymentBtn}`).click({force: true})
    cy.get(`${checkoutPage.confirmAddressBtn}`).click({force: true})

    // Continue Checkout 2nd Page
    cy.insertValue(`${checkoutPage.phoneNo}`, Cypress.env().json.checkout.PHONE_NO)
    cy.clickElement(`${checkoutPage.orderBtn}`)

    // Switch to iFrame and fill the CC info
    cy.wait(10000)
    cy.get(`${checkoutPage.iFrame}`).then($element => {
        
      const $body = $element.contents().find('body')
    
      let myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.cardName}`).click().type('First Name Last Name')
      myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.cardNo}`).click().type('4111111111111111')
      myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.cvc}`).click().type('424')
      myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.cardMonth}`).click()
      myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.selectMonth}`).click()
      myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.cardYear}`).click()
      myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.selectYear}`).click()
      myFrame = cy.wrap($body)
      myFrame.find(`${checkoutPage.finalizePaymentBtn}`).click()
    })
})

Cypress.Commands.add('validateMessage', () => {
    // Validate the Message
    cy.wait(10000)
    cy.verifyText(`${checkoutPage.verifyMessage}`, Cypress.env().json.message.ERROR_MESSAGE)

    // Go back to Home
    cy.get(`${checkoutPage.continueShoppingBtn}`).click()
})