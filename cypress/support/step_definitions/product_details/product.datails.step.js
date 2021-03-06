/* global Given, Then, When */
/// <reference types="Cypress" />


// Esse STEP tem como objetivo centralizar funções que executem um conjunto genérico de ações
// para serem reaproveitadas por steps ligados a cenários que envolvam essa page

// O Given de acesso está aqui para que ele seja reaproveito por todos os scenários que acessam a página diretamente
// Além do reaproveitamento a integração do cucumber tem uma limitação de texto('acess to home page') só pode ser vinculado a um Given como Step

import ProductDetailsElements from '../../elements/product.details.elements'
import ProductDetailsPage from '../../page_objects/product.details.page'




const productDetailsPage = new ProductDetailsPage
const productDetailsElements = new ProductDetailsElements

export function selectProductsOptions (product = {name: '', price: 0, quantity: 0, size: '', color: '' }) {

    // assertQuantity(product.quantity)

}


export function checkProducts (product = {name: '', price: 0, quantity: 0, size: '', color: '' }) {




}


function assertQuantity (pQuantity) {
    cy.get(productDetailsElements.quantityProduct())
        .should('be.visible')
            .then((quantity) => {

                while(pQuantity !== quantity) {
                    if(pQuantity < quantity){
                        let times = quantity - pQuantity
                        productDetailsPage.plusQuantity(times)
                    }else if (pQuantity > quantity) {
                        let times = pQuantity - quantity
                        productDetailsPage.plusQuantity(times)
                    }

                }
                quantity.val()

                console.table(quantity.children)

            })
}
