import 'cypress-iframe'

describe('Login', ()=>{
    before(()=>{
        cy.viewport(1600,900)
        cy.visit('/register?returnUrl=%2Fcart')
        cy.get('.ico-register').click()
        cy.get('#gender-male').click() 
        cy.get('#FirstName').type('Eve')
        cy.get('#LastName').type('Gramlin')
        
        cy.get('#Newsletter').uncheck()
        cy.fixture('example').then(
            data=>{
                cy.get('#Email').type(data.email)
                cy.get('#Password').type(data.password)
                cy.get('#ConfirmPassword').type(data.password)
            }
        )
        
        cy.get('#register-button').click()
    })
    beforeEach(()=>{
        cy.visit('/login?returnUrl=%2Fcart')
        cy.viewport(1600,900)
        cy.fixture('example').then(
            data=>{
                cy.get('#Email').type(data.email)
                cy.get('#Password').type(data.password)
            }
        )
        cy.get('form > .buttons > .button-1').click()
      })

it('Add to cart', () => {
    cy.get('.ico-cart .cart-qty').then(elem=>{
        const cartQty = Number.parseInt(elem.text().slice(1,2))
        expect(cartQty).to.eq(0)
    }    
    )
    cy.visit('https://demo.nopcommerce.com/windows-8-pro')
    cy.get('#product_enteredQuantity_11').type('{Backspace}'+2)
    cy.get('#add-to-cart-button-11').click()
    cy.get('.content').should('have.text', "The product has been added to your shopping cart")

    cy.get('.ico-cart .cart-qty').then(elem=>{
        const cartQty = Number.parseInt(elem.text().slice(1,2))
        expect(cartQty).to.eq(2)
    }    
    )
    cy.get('.content > a').click()
    cy.get('.product-subtotal').then(elem=>{
        const price = parseFloat(elem.text().split('$')[1])

        cy.get('.product-subtotal').then(total=>{
            const totalPrice = parseFloat(total.text().split('$')[1])

            expect(price).to.eq(totalPrice)
        })
    })

    cy.get('#termsofservice').check()
    cy.get('#checkout').click()

    cy.url().should('equal','https://demo.nopcommerce.com/onepagecheckout#opc-billing')

    

    cy.get('#billing-buttons-container > .new-address-next-step-button').click()
    
    cy.wait(1000)

    cy.get('#shipping-method-buttons-container > .button-1').click()

    cy.get('#paymentmethod_1').click()
    cy.get('#payment-method-buttons-container > .button-1').click()

    cy.wait(1000)

    cy.get('#CreditCardType').select('Visa')
    cy.get('#CardholderName').type('John Doe')

    cy.get('#CardNumber').type('4242424242424242')

    cy.get('#ExpireMonth').select('05')
    cy.get('#ExpireYear').select('2026')
    cy.get('#CardCode').type('000')
    

    cy.get('#payment-info-buttons-container > .button-1').click()

    cy.wait(1000)

    cy.get('#confirm-order-buttons-container > .button-1').click()

    cy.get('.section > .title > strong').should('have.text', 'Your order has been successfully processed!')

    cy.get('.buttons > .button-1').click()
    })

    it('Check My account orders', ()=>{
        /**/
    })
})