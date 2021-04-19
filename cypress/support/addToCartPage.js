const addToCartPage = require('../page_objects/addToCartPage.json')

Cypress.Commands.add('addMenJeans', () => {
    // Item: Jeans
    cy.clickElement(`${addToCartPage.menClothes}`)
    cy.clickElement(`${addToCartPage.clothingTab}`)
    cy.clickElement(`${addToCartPage.jeans}`)

        // Select Jeans and Add to Cart
    cy.clickElement(`${addToCartPage.selectMenJeans}`)
    cy.get(`${addToCartPage.jeansWidth}`).contains('Width').click()
    cy.get(`${addToCartPage.jeansSelectWidth}`).contains('33').click()
    cy.get(`${addToCartPage.jeansLenght}`).contains('Length').click()
    cy.get(`${addToCartPage.jeansSelectLenght}`).contains('32').click() 
    cy.clickElement(`${addToCartPage.addBtn}`)
    cy.clickElement(`${addToCartPage.backBtn}`)  
})

Cypress.Commands.add('addMenShirt', () => {
    // Item: Shirt
    cy.clickElement(`${addToCartPage.menClothes}`)
    cy.clickElement(`${addToCartPage.clothingTab}`)
    cy.clickElement(`${addToCartPage.shirt}`)

        // Select Shirt and Add to Cart
    cy.clickElement(`${addToCartPage.selectShirt}`)
    cy.clickElement(`${addToCartPage.shirtSize}`)
    cy.get(`${addToCartPage.shirtSelectSize}`).contains('XL').click()
    cy.clickElement(`${addToCartPage.addBtn}`)
    cy.clickElement(`${addToCartPage.backBtn}`)
})

Cypress.Commands.add('addMenShoes', () => {
    // Item: Shoes
    cy.clickElement(`${addToCartPage.menClothes}`)
    cy.clickElement(`${addToCartPage.shoesTab}`)

        // Select Shoes and Add to Cart
    cy.clickElement(`${addToCartPage.selectMenShoes}`)
    cy.get(`${addToCartPage.shoesSize}`).click()
    cy.get(`${addToCartPage.shoesSelectSize}`).contains('42').click()
    cy.clickElement(`${addToCartPage.addBtn}`)
    cy.clickElement(`${addToCartPage.backBtn}`)
})


