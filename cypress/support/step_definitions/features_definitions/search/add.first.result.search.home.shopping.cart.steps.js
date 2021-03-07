/* global Given, Then, When */
/// <reference types="Cypress" />


const homeSteps = require('../../home/home.steps')
const productDetailsSteps = require('../../product_details/product.datails.step')
const shopCartSteps = require('../../shop_cart/shop.cart.steps')


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

  await  productDetailsSteps.checkProductsDetails(fadedShortSleeveProduct)

  await  productDetailsSteps.addProductShopCart(fadedShortSleeveProduct)

  await  shopCartSteps.verifyProductAdd()



}



})

Then('the product is added to my shoping cart', () => {



})