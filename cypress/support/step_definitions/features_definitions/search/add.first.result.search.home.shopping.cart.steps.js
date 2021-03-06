/* global Given, Then, When */
/// <reference types="Cypress" />


const homeSteps = require('../../home/home.steps')

let fadedShortSleeveProduct = {
    name: "Faded Short Sleeve",
    price: 16.51,
    quantity: 2,
    size: "L",
    color: "Blue"
}


When(`I add a product 'Faded Short Sleeve' to the shoping cart from the first search result`, () => {

    homeSteps.selectFirstResultOnDropDown(fadedShortSleeveProduct.name)

})

Then('the product is added to my shoping cart', () => {



})