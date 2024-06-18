describe('template spec', () => {
    beforeEach(()=>{
      cy.visit('/cell-phones')
      cy.viewport(1600,900)
    })
    it('Add to compare', () => {
        cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button').click()
        cy.get('.bar-notification .content').should('contain.text', 'The product has been added to your product comparison')
        cy.wait(1000)
        cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button').click()
        cy.get('.bar-notification .content').should('contain.text', 'The product has been added to your product comparison')
        cy.wait(1000)
        cy.get('.bar-notification .content > a').click()

        cy.url().should('equal', 'https://demo.nopcommerce.com/compareproducts')
        cy.get('.remove-product').children().should('have.length', 3)

    })
    it('Remove from compare', () => {
      cy.get(':nth-child(1) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button').click()
      cy.get('.bar-notification .content').should('contain.text', 'The product has been added to your product comparison')
      cy.wait(1000)
      cy.get(':nth-child(3) > .product-item > .details > .add-info > .buttons > .add-to-compare-list-button').click()
      cy.get('.bar-notification .content').should('contain.text', 'The product has been added to your product comparison')
      cy.wait(1000)
      cy.get('.bar-notification .content > a').click()

      cy.url().should('equal', 'https://demo.nopcommerce.com/compareproducts')
      cy.get('.remove-product').children().should('have.length', 3)

      cy.get(':nth-child(2) > .button-2').click()

      cy.get('.remove-product').children().should('have.length', 2)

      cy.get('.button-2').click()

      cy.get('.no-data').should('have.text', 'You have no items to compare.')
  })


})