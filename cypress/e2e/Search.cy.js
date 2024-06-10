describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.viewport(1600,900)
      })

it('Verify search functionality - dropdown menu', () => {
    cy.get('#small-searchterms').type('Shirt')
    cy.get('#ui-id-1').should('be.visible')
    cy.get('#ui-id-1').children().should('contain.text','Shirt').and('have.length',3)
    })
it('Verify search functionality - after seaching', () => {
        cy.get('#small-searchterms').type('Shirt')
        cy.get('#small-search-box-form > .button-1').click()
        cy.get('.item-grid').children().should('contain.text','Shirt').and('have.length',3)
    })
})