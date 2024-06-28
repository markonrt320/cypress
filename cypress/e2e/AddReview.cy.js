describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('/')
        cy.viewport(1600,900)
        cy.get('.ico-login').click()

        cy.fixture('example').then(
            data=>{
                cy.get('#Email').type(data.email)
                cy.get('#Password').type(data.password)
            }
        )
        cy.get('form > .buttons > .button-1').click()
        
      })
    

it('Login with right credentials', () => {
    cy.get('#small-searchterms').type('laptop')
    cy.wait(1000)
    cy.get('#small-search-box-form > .button-1').click()
    cy.get(':nth-child(1) > .product-item > .details > .product-title > a').click()

    cy.wait(1000)
    cy.get('.add-review > a').click()

    cy.get('#AddProductReview_Title').type('Awesome Product')
    cy.get('#AddProductReview_ReviewText').type('Awesome Product, i recommend it to everybody!')
    cy.get('#addproductrating_3').click()
    cy.wait(500)
    cy.get('#add-review').click()
    cy.get('.content').should('contain.text','Product review is successfully added.')
    cy.get('.close').click()
    cy.wait(2000)
    cy.get('.product-review-list').should('contain.text', 'Awesome Product')
    cy.get('.product-review-list').should('contain.text', 'Awesome Product, i recommend it to everybody!')

    
})
afterEach(()=>{
    cy.get('.ico-logout').click()
})
})