import 'cypress-iframe'

describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.viewport(1600,900)
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
    
    cy.get('#open-estimate-shipping-popup').click()
    cy.iframe('.aut-iframe')
    
    /*cy.get('.product-subtotal').then(elem=>{
        const price = parseFloat(elem.text().split('$')[1])

        cy.get('.product-subtotal').then(total=>{
            const totalPrice = parseFloat(total.text().split('$')[1])

            expect(price).to.eq(totalPrice)
        })
    })*/
    })
})