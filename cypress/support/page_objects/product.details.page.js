/// <reference types="Cypress" />

import ProductDetailsElements from "../elements/product.details.elements";

const productDetailsElements = new ProductDetailsElements

export default class ProductDetails {

    checkPageLoad(status = 200) {

        switch (status) {

            case 200:
                cy.wait('@getProductDetails').its('response.statusCode').should('eq', 200)
                break
            case 404:
                cy.wait('@getProductDetails').its('response.statusCode').should('eq', 404)
                break
            case 500:
                cy.wait('@getProductDetails').its('response.statusCode').should('eq', 500)
                break
        }


    }

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


    selectSize(size) {
        cy.get(productDetailsElements.selectSizeAvaibleProduct())
            .select(size)
                .should('have.text',size)
    }

    pickColor(color) {
        cy.get(productDetailsElements.listColorsAvaibleProduct())
            .find('li')
                .find('a')
                    .filter(`:contains(${color.toLocaleLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() })})`)
                        .click()
    }


 }