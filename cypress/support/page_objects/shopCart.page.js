/// <reference types="Cypress" />

import ShopCartElements from '../elements/shop.cart.elements'

const shopCartElements = new ShopCartElements

export default class ShopCart {


    async checkPageLoad (status = 200) {

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

    verifyProductAtShopCart(row = 'first', product) {

        console.table(product)

        if (row = 'frist') {
            cy.get(shopCartElements.rowProductShopCart())
                .first()
                    .find('td')
                        .as('tdListFirstProductRow')
                            .filter('.cart_description')
                                .find('p.product-name')
                                    .find('a')
                                        .invoke('text')
                                            .should('contain',product.name)
                .get('@tdListFirstProductRow')
                    .filter('.cart_unit')
                        .find('span > span.price')
                            .invoke('text')
                                .should('equal',`$${product.price}`)

                .get('@tdListFirstProductRow')
                    .filter('.cart_quantity')
                        .find('input.cart_quantity_input')
                            .invoke('val')
                                .should('equal',product.quantity.toString())

                .get('@tdListFirstProductRow')
                    .filter('.cart_total')
                                    .find('span.price')
                                        .invoke('text')
                                            .should('contain', `$${product.quantity * product.price}`)


    }


  }

}