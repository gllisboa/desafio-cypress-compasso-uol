/* global Given, Then, When */
/// <reference types="Cypress" />


const homeSteps = require('../../home/home.steps')
const productDetailsSteps = require('../../product_details/product.datails.step')


let fadedShortSleeveProduct = {
    name: "Faded Short Sleeve",
    price: 16.51,
    quantity: 2,
    size: "L",
    color: "Blue"
}


When(`I add a product 'Faded Short Sleeve' to the shoping cart from the first search result`, () => {



    let selectProductsOptions =  productDetailsSteps.selectProductsOptions

    homeSteps.selectFirstResultOnDropDown(fadedShortSleeveProduct.name,productDetailsSteps.selectProductsOptions(fadedShortSleeveProduct))



    // productDetailsSteps.selectProductsOptions(fadedShortSleeveProduct)





})

Then('the product is added to my shoping cart', () => {



})