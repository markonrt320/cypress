describe('template spec', () => {
    beforeEach(()=>{
      cy.visit('/')
      cy.viewport(1600,900)
    })
    it.only('Register with already registered credentials', () => {
        cy.get('.ico-register').click()
        cy.get('#gender-male').click() 
        cy.get('#FirstName').type('John')
        cy.get('#LastName').type('Doe')
        cy.get('#Email').type('johndoe@gm.com')
        cy.get('#Newsletter').uncheck()
        cy.get('#Password').type('P@ssw0rd')
        cy.get('#ConfirmPassword').type('P@ssw0rd')

        cy.get('#register-button').click()

        cy.get('.message-error > ul > li').should('have.text','The specified email already exists')
    })
    it.skip('Register with right credentials', () => {
        cy.get('.ico-register').click()
        cy.get('#gender-male').click() 
        cy.get('#FirstName').type('Eve')
        cy.get('#LastName').type('Gramlin')
        cy.get('#Email').type('eg@gm.com')
        cy.get('#Newsletter').uncheck()
        cy.get('#Password').type('sifra123')
        cy.get('#ConfirmPassword').type('sifra123')

        cy.get('#register-button').click()
        
        cy.get('.message-error > ul > li').should('have.text','Your registration completed')
    })
    it.skip('Register with valid username and mail but invalid password', () => {
        cy.get('.ico-register').click()
        cy.get('#gender-male').click() 
        cy.get('#FirstName').type('Eve')
        cy.get('#LastName').type('Gramlin')
        cy.get('#Email').type('eg@gm.com')
        cy.get('#Newsletter').uncheck()
        cy.get('#Password').type('sifra')
        cy.get('#ConfirmPassword').type('sifra')

        cy.get('#register-button').click()
        
        cy.get('.field-validation-error').should('have.text','Password must meet the following rules: must have at least 6 characters and not greater than 64 characters')
    })
    it('Register with empty username field but valid mail and password', () => {
        cy.get('.ico-register').click()
        cy.get('#gender-male').click()
        cy.get('#LastName').type('Doe')
        cy.get('#Email').type('evelin@gm.com')
        cy.get('#Newsletter').uncheck()
        cy.get('#Password').type('password')
        cy.get('#ConfirmPassword').type('password')

        cy.get('#register-button').click()
        
        cy.get('#FirstName-error').should('have.text','First name is required.')
    })


  })