/* global Given, Then, When */
/// <reference types="Cypress" />


// Esse STEP tem como objetivo centralizar funções que executem um conjunto genérico de ações
// para serem reaproveitadas por steps ligados a cenários que envolvam essa page

// O Given de acesso está aqui para que ele seja reaproveito por todos os scenários que acessam a página diretamente
// Além do reaproveitamento a integração do cucumber tem uma limitação de texto('acess to home page') só pode ser vinculado a um Given como Step

import ProductDetailsElements from '../../elements/product.details.elements'
import ProductDetailsPage from '../../page_objects/product.details.page'




const productDetailsPage = new ProductDetailsPage

export  async function selectProductsOptions (product = {name: '', price: 0, quantity: 0, size: '', color: '' }) {

    productDetailsPage.plusQuantity(product.quantity - 1)

    productDetailsPage.selectSize(product.size)

    productDetailsPage.pickColor(product.color)

    Promise.resolve()

}


export async function checkProductsDetails (product = {name: '', price: 0, quantity: 0, size: '', color: '' }) {

    productDetailsPage.checkPrice(product.price)

    productDetailsPage.checkName(product.name)

    Promise.resolve()

}

export async function addProductShopCart(product = {name: '', price: 0, quantity: 0, size: '', color: '' }) {


    await productDetailsPage.clickAddShopCart()

    productDetailsPage.checkSuccessMessage('Product successfully added to your shopping cart')

    productDetailsPage.checkNameProductSuccesLayer(product.name)

    productDetailsPage.checkAttributesProductSuccesLayer(product)

    productDetailsPage.checkNamePriceSuccesLayer(product)

    productDetailsPage.clickBtnCloseLayer()

    Promise.resolve()






}





