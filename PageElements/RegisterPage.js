class Register{
    visit(){
        cy.visit('/register?returnUrl=%2F')
    }
    genderCheckbox(){
        return cy.get('#gender-male').click()
    }
    firstName(name){
        return cy.get('#FirstName').type(name)
    }
    lastName(lastname){
        return cy.get('#LastName').type(lastname)
    }
    dateOfBirth(){
        cy.get('[name="DateOfBirthDay"]').select('15')
        cy.get('[name="DateOfBirthMonth"]').select('May')
        cy.get('[name="DateOfBirthYear"]').select('2002')
    }
    email(email){
        cy.get('#Email').type(email)
    }
    newsletter(){
        return cy.get('#Newsletter').uncheck()
    }
    password(password){
        return cy.get('#Password').type(password)
    }
    confirmPassword(confirm){
        return cy.get('#ConfirmPassword').type(confirm)
    }
    registerButton(){
        return cy.get('#register-button').click()
    }
    exists(){
        return cy.get('.message-error > ul > li').should('have.text','The specified email already exists')
    }
    rightCred(){
        return cy.get('.message-error > ul > li').should('have.text','Your registration completed')
    }
    invalidPass(){
        return cy.get('.field-validation-error').should('have.text','Password must meet the following rules: must have at least 6 characters and not greater than 64 characters')
    }
}

export default Register