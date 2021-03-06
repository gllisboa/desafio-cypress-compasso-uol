/// <reference types="Cypress" />

import HomeElements from '../elements/home.elements'

const homeElements = new HomeElements()

export default class HomePage {


    typeTopSearch(typeText) {
        cy.get(homeElements.inputSearch())
            .type(typeText).should('have.value', typeText)

}

    clickResultItem(item = 'first') {
        cy.get(homeElements.divResultsSearchDropDow())
            .should('be.visible')

            //create a route for detailsProductPage for assert load after click item
            cy.intercept(
                {
                  method: 'GET',
                  url: 'index.php?id_product=*&controller=product',  
                }
              ).as('getProductDetails')

        if (item == 'first') {
            cy.get(homeElements.listResultsSearchDropDow())
                .find('li')
                    .first()
                        .should('exist')
                            .click()
        }else {
            cy.get(homeElements.listResultsSearchDropDow())
                .find('li')
                    .filter(`:contains(${item})`)
                        .should('contain.text',item)
                            .click()
        }
    }

}