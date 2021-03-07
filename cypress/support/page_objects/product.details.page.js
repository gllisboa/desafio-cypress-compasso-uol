/// <reference types="Cypress" />

import ProductDetailsElements from "../elements/product.details.elements";

const productDetailsElements = new ProductDetailsElements

export default class ProductDetails {




    checkPageLoad(status = 200) {

        switch (status) {

            case 200:
                cy.wait('@getProductDetails')
                    .its('response.statusCode')
                        .should('eq', 200)
                break
            case 404:
                cy.wait('@getProductDetails').
                    its('response.statusCode')
                        .should('eq', 404)
                break
            case 500:
                cy.wait('@getProductDetails')
                    .its('response.statusCode')
                        .should('eq', 500)
                break
        }

        return true 

    }


    clickOpenShopCart () {

        cy.get(productDetailsElements.shopCart())
            .click()
    }


    clickAddShopCart() {

        cy.get(productDetailsElements.btnAddShopCart())
            .should('be.visible')
                .click()
                    .get('[title="Close window"]')
                        .click({ force: true })

    }

    clickBtnCloseLayer(){
        cy.get(productDetailsElements.btnCloseLayer())
            .click()
    }

    checkSuccessMessage(message) {

        cy.get(productDetailsElements.successMessageAddShopCartProduct())
            .should('be.visible')
                .invoke('text')
                    .should('contain', message)
    }

    checkNameProductSuccesLayer(name) {
        cy.get(productDetailsElements.nameProductSuccessLayer())
            .should('be.visible')
                .invoke('text')
                    .should('contain', name)
    }

    checkAttributesProductSuccesLayer(attributes = { color: '', size: '' }) {
        cy.get(productDetailsElements.attributesProductSuccessLayer())
            .should('be.visible')
                .invoke('text')
                    .should('equal', `${attributes.color}, ${attributes.size}`)
    }

    checkNamePriceSuccesLayer(product = { quantity: '', price: '' }) {
        cy.get(productDetailsElements.priceProductSuccessLayer())
            .should('be.visible')
                .invoke('text')
                    .should('equal', `$${product.quantity * product.price}`)

    }


    checkName(name) {
        cy.get(productDetailsElements.titleProduct())
            .invoke('text')
                .should('contain',name)
    }

    checkQuantity(quantityExpect) {
        cy.get(productDetailsElements.quantityProduct())
            .should('have.value',quantityExpect)

    }

    checkPrice(priceExpect) {
        cy.get(productDetailsElements.priceProduct())
            .invoke('text')
                .should('equal',`$${priceExpect}`)

    }

    async plusQuantity(nTimes = 1) {


        for (let times = 0; times < nTimes; times++) {

            await cy.get(productDetailsElements.quantityProduct())
                    .should('be.visible')
                        .invoke('val')
                            .as('oldVal')


            await cy.get(productDetailsElements.plusBtnQuantityProduct())
                .should('exist')
                    .click()

            await cy.get(productDetailsElements.quantityProduct())
                .invoke('val')
                    .as('newVal')

            await cy.get('@newVal')
                    .should('not.equal', cy.get('@oldVal'))
        }


    }

    async minusQuantity(nTimes = 1) {

        for (let times = 0; times < nTimes; times++) {
            await cy.get(productDetailsElements.quantityProduct())
                        .should('be.visible')
                            .invoke('val')
                                .as('oldVal')


            await cy.get(productDetailsElements.minusBtnQuantityProduct())
                .should('exist')
                    .click()

            await cy.get(productDetailsElements.quantityProduct())
                .invoke('val')
                    .as('newVal')

            await cy.get('@newVal')
                    .should('not.equal', cy.get('@oldVal'))

        }



    }


    selectSize(size) {
        cy.get(productDetailsElements.selectSizeAvaibleProduct())
            .select(size)
                .get(productDetailsElements.textSelectedSize())
                    .invoke('text')
                            .should('equal',size)
                                .url()
                                    .should('include', `size-${size.toLocaleLowerCase()}`)

    }

   pickColor(color) {

        cy.get(productDetailsElements.listColorsAvaibleProduct())
            .find('li')
                .find('a')
                    .filter(`[title = ${color.toLocaleLowerCase().replace(/\b\w/g, function(l){ return l.toUpperCase() })}]`)
                        .click({force: true})
                            .url()
                                .should('include', `/color-${color.toLocaleLowerCase()}`)

    }


 }