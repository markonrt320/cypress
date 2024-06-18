/// <reference types="Cypress" />

import RegisterPage from '../../PageElements/RegisterPage.js'

const registerPage = new RegisterPage

describe('Registration test cases', ()=>{
    beforeEach(()=>{
        registerPage.visit()
        cy.viewport(1600,900)
    })
    it('Register with already registered credentials', ()=>{
        registerPage.genderCheckbox()
        registerPage.firstName('John')
        registerPage.lastName('Doe')
        registerPage.dateOfBirth()
        registerPage.email('johndoe@gm.com')
        registerPage.newsletter()
        registerPage.password('P@ssw0rd')
        registerPage.confirmPassword('P@ssw0rd')
        registerPage.registerButton()
        registerPage.exists()
    })
    it('Register with right credentials', ()=>{
        registerPage.genderCheckbox()
        registerPage.firstName('Eve')
        registerPage.lastName('Gramlin')
        registerPage.dateOfBirth()
        registerPage.email('eg@gm.com')
        registerPage.newsletter()
        registerPage.password('sifra123')
        registerPage.confirmPassword('sifra123')
        registerPage.registerButton()
        registerPage.rightCred()
    })
    it('Register with valid username and mail but invalid password', ()=>{
        registerPage.genderCheckbox()
        registerPage.firstName('Eve')
        registerPage.lastName('Gramlin')
        registerPage.dateOfBirth()
        registerPage.email('eg@gm.com')
        registerPage.newsletter()
        registerPage.password('sifra')
        registerPage.confirmPassword('sifra')
        registerPage.registerButton()
        registerPage.invalidPass()
    })
    it('Register with valid username and mail but invalid password', ()=>{
        registerPage.genderCheckbox()
        registerPage.lastName('Gramlin')
        registerPage.dateOfBirth()
        registerPage.email('eg@gm.com')
        registerPage.newsletter()
        registerPage.password('password')
        registerPage.confirmPassword('password')
        registerPage.registerButton()

        cy.get('#FirstName-error').should('have.text','First name is required.')
    })

})
