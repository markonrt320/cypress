describe('template spec', () => {
    beforeEach(()=>{
      cy.visit('/cell-phones')
      cy.viewport(1600,900)
    })
    it('Add', () => {
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button').click()
        cy.get('.bar-notification .content').should('contain.text', 'The product has been added to your product comparison')
        cy.wait(2500)
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button').click()
        cy.get('.bar-notification .content').should('contain.text', 'The product has been added to your product comparison')
        cy.wait(2500)
        cy.get('.bar-notification .content > a').click()

        cy.url().should('equal', 'https://demo.nopcommerce.com/compareproducts')
        cy.get('.remove-product').children().should('have.length', 3)
    })


})