/* global Given, Then, When */
/// <reference types="Cypress" />


// Esse STEP tem como objetivo centralizar funções que executem um conjunto genérico de ações
// para serem reaproveitadas por steps ligados a cenários que envolvam essa page

// O Given de acesso está aqui para que ele seja reaproveito por todos os scenários que acessam a página diretamente
// Além do reaproveitamento a integração do cucumber tem uma limitação de texto('acess to home page') só pode ser vinculado a um Given como Step

import ShopCartPage from '../../page_objects/shopCart.page'

const shopCartPage = new ShopCartPage


export async function verifyProductAdd(product) {



        await shopCartPage.openShopCart()

        await shopCartPage.checkPageLoad()

        await shopCartPage.verifyProductAtShopCart('first',product)


}
