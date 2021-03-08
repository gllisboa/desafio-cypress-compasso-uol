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



And('select first result on dropdown', () => {

  homeSteps.selectFirstResultOnDropDown(fadedShortSleeveProduct.name)


})

And('select products options', () => {


  productDetailsSteps.selectProductsOptions(fadedShortSleeveProduct)

})



When(`I add a product 'Faded Short Sleeve' to the shoping cart from the first search result`, () => {

  productDetailsSteps.addProductShopCart(fadedShortSleeveProduct)

})



Then('the product is added to my shoping cart', () => {

    shopCartSteps.verifyProductAdd(fadedShortSleeveProduct)




})