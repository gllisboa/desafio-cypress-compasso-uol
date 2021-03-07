/// <reference types="Cypress" />

import ShopCartElements from '../elements/shop.cart.elements'

const shopCartElements = new ShopCartElements

export default class ShopCart {


    checkPageLoad (status = 200) {

        switch (status) {

            case 200:
                cy.wait('@getShopCart')
                    .its('response.statusCode')
                        .should('eq', 200)
                break
            case 404:
                cy.wait('@getShopCart').
                    its('response.statusCode')
                        .should('eq', 404)
                break
            case 500:
                cy.wait('@getShopCart')
                    .its('response.statusCode')
                        .should('eq', 500)
                break
        }

        Promise.resolve()


    }

    async openShopCart() {

        //create a route for detailsProductPage for assert load after click item
       await cy.intercept(
           {
             method: 'GET',
             url: 'index.php?controller=order',
           }
         ).as('getShopCart')


       await cy.get(shopCartElements.shopCart())
           .click({ force:true })

        Promise.resolve()

    }



}