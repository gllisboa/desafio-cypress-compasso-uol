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

execute()



async function execute () {

  await  homeSteps.selectFirstResultOnDropDown(fadedShortSleeveProduct.name)

  await  productDetailsSteps.selectProductsOptions(fadedShortSleeveProduct)

  await  productDetailsSteps.checkProducts(fadedShortSleeveProduct)


}



})

Then('the product is added to my shoping cart', () => {



})