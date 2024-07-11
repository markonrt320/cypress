describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.viewport(1600,900)
        /*cy.get('.ico-login').click()

        cy.fixture('example').then(
            data=>{
                cy.get('#Email').type(data.email)
                cy.get('#Password').type(data.password)
            }
        )
        cy.get('form > .buttons > .button-1').click()
        */
      })
    

it('Modal', () => {
    cy.get(':nth-child(3) > .product-item > .picture > a > img').click()
    cy.wait(1000)
    cy.get('#add-to-cart-button-18').click()
    cy.wait(1000)
    cy.get('.content > a').click()
    cy.wait(1000)
    cy.get('#open-estimate-shipping-popup').click()
    cy.get('#CountryId').select('Serbia')
    cy.get('#ZipPostalCode').type('11000')
    cy.get(':nth-child(2) > .estimate-shipping-row-item-radio > label').click()
    cy.get('.apply-shipping-button-container > .button-2').click()
})
})