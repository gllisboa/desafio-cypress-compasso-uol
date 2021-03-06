/* global Given, Then, When */
/// <reference types="Cypress" />


// Esse STEP tem como objetivo centralizar funções que executem um conjunto genérico de ações
// para serem reaproveitadas por steps ligados a cenários que envolvam essa page

// O Given de acesso está aqui para que ele seja reaproveito por todos os scenários que acessam a página diretamente
// Além do reaproveitamento a integração do cucumber tem uma limitação de texto('acess to home page') só pode ser vinculado a um Given como Step

import HomeElements from '../../elements/home.elements'
import HomePage from '../../page_objects/home.page'



const urlHome = Cypress.env('url_home')
const homePage = new HomePage
const homeElements = new HomeElements

Given('acess to home page', () => {
    cy.visit(urlHome)
})


export function selectFirstResultOnDropDown (searchText) {

    // homePage.typeTopSearch(searchText)
    homePage.typeTopSearch('Chiffon Dress')
    homePage.clickResultItem('Printed Summer Dress')


}
// //Seleciona Supervisão e Filial
// export function selecionarFilialSupervisao(nomeFilial, nomeSupervisao){

//     painelEmbarquePage.selecionarItemFiltroFilial(nomeFilial,nomeFilial)
//     painelEmbarquePage.selecionarItemFiltroSupervisao(nomeSupervisao,nomeSupervisao)

// }

