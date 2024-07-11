describe('Test Suite', ()=>{
    it('API Authentication', ()=>{
        cy.request({
            method: "POST",
            url: 'https://simple-books-api.glitch.me/api-clients/',
            body: {
                    "clientName": `${Cypress.env('userName')}`,
                    "clientEmail": `${Cypress.env('userMail')}`
            }
        }).then((response)=>{
        console.log(response)
        expect(response.status).eq(409)
    })
})
  it('Authentication', ()=>{
        cy.request({
            method: "POST",
            url: 'https://simple-books-api.glitch.me/orders',
            headers: {
                Authorization: 'Bearer '+ `${Cypress.env('authToken')}`
            },
            body: { 
                    "bookId": 4,
                    "customerName": `${Cypress.env('userName')}`
                }
        }).then((response)=>{
        console.log(response)
        expect(response.status).eq(201)
    })
})
it('Authentication', ()=>{
    cy.request({
        method: "GET",
        url: 'https://simple-books-api.glitch.me/orders',
        headers: {
            Authorization: 'Bearer '+ `${Cypress.env('authToken')}`
        }
    }).then((response)=>{
    console.log(response)
    expect(response.status).eq(200)
    expect(response.body[2].customerName).to.eq(`${Cypress.env('userName')}`)
})
})
  
})