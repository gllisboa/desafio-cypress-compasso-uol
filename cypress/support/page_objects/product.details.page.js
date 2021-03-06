/// <reference types="Cypress" />

import ProductDetailsElements from "../elements/product.details.elements";

const productDetailsElements = new ProductDetailsElements

export default class ProductDetails {

    checkQuantity(quantityExpect) {
        cy.get(productDetailsElements.quantityProduct())
            .should('have.value',quantityExpect)
    }

    checkPrice(priceExpect) {
        cy.get(productDetailsElements.priceProduct)
            .should('have.value',priceExpect)
    }

    plusQuantity(nTimes = 1) {
        let oldQuantity = 0

        for (let times = 0; times < nTimes; times++) {

            cy.get(productDetailsElements.quantityProduct()).then((price) => {
                oldQuantity =  price[0].innerText.parseInt()
            })

            cy.get(productDetailsElements.plusBtnQuantityProduct)
                .should('exist')
                    .click()

            cy.get(productDetailsElements.quantityProduct())
                .should('be.greaterThan', oldQuantity )
        }


    }

    minusQuantity(nTimes = 1) {
        let oldQuantity = 0

        for (let times = 0; times < nTimes; times++) {

            cy.get(productDetailsElements.quantityProduct()).then((price) => {
                oldQuantity =  price[0].innerText.parseInt()
            })

            cy.get(productDetailsElements.plusBtnQuantityProduct)
                .should('exist')
                    .click()

            cy.get(productDetailsElements.quantityProduct())
                .should('be.lessThan', oldQuantity )
        }


    }


 }