/* global Given, Then, When */
/// <reference types="Cypress" />


const homeSteps = require('../../home/home.steps')


When(`I add a product 'Faded Short Sleeve' to the shoping cart from the first search result`, () => {

    homeSteps.selectFirstResultOnDropDown('Faded Short Sleeve')

})

Then('the product is added to my shoping cart', () => {



})