/* global Given, Then, When */
/// <reference types="Cypress" />


// Esse STEP tem como objetivo centralizar funções que executem um conjunto genérico de ações
// para serem reaproveitadas por steps ligados a cenários que envolvam essa page

// O Given de acesso está aqui para que ele seja reaproveito por todos os scenários que acessam a página diretamente
// Além do reaproveitamento a integração do cucumber tem uma limitação de texto('acess to home page') só pode ser vinculado a um Given como Step

import HomeElements from '../../elements/home.elements'
import HomePage from '../../page_objects/home.page'
import ProductDetailsPage from '../../page_objects/product.details.page'



const urlHome = Cypress.env('url_mystore')
const homePage = new HomePage
const productDetailsPage = new ProductDetailsPage
const homeElements = new HomeElements

Given('acess to home page', () => {
    cy.visit(`${urlHome}index.php`)
})


export async function selectFirstResultOnDropDown (searchText) {



    homePage.typeTopSearch(searchText)

    homePage.clickResultItem()

    productDetailsPage.checkPageLoad()

    Promise.resolve()



}
