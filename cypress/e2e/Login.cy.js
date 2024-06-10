describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.viewport(1600,900)
      })

it('Login with right credentials', () => {
    cy.get('.ico-login').click()
    cy.get('#Email').type('johndoe@gm.com')
    cy.get('#Password').type('P@ssw0rd')

    cy.get('form > .buttons > .button-1').click()

    cy.url().should('eq', 'https://demo.nopcommerce.com/')
})
it('Login with wrong email', ()=>{
    cy.get('.ico-login').click()
    cy.get('#Email').type('evelin@asd.com')
    cy.get('#Password').type('P@ssw0rd')

    cy.get('form > .buttons > .button-1').click()

    cy.get('.message-error').should('contain.text', 'Login was unsuccessful')
})
it('Login with invalid email', ()=>{
    cy.get('.ico-login').click()
    cy.get('#Email').type('johndoe@a.')
    cy.get('#Password').type('P@ssw0rd')
    cy.get('#Email-error').should('have.text', 'Please enter a valid email address.')

    cy.get('form > .buttons > .button-1').click()
})
it('Login with invalid password', ()=>{
    cy.get('.ico-login').click()
    cy.get('#Email').type('johndoe@gm.com')
    cy.get('#Password').type('w0rd')
    
    cy.get('form > .buttons > .button-1').click()

    cy.get('.message-error').should('include.text', 'Login was unsuccessful')
})
it('User is able to login and logout', () => {
    cy.get('.ico-login').click()
    cy.get('#Email').type('johndoe@gm.com')
    cy.get('#Password').type('P@ssw0rd')

    cy.get('form > .buttons > .button-1').click()

    cy.url().should('eq', 'https://demo.nopcommerce.com/')
    cy.get('.ico-logout').click()
})
})