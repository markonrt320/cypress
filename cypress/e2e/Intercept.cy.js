describe('Login Test', () => {
    it('should intercept the login POST request', () => {
        // Intercept the POST request to the login endpoint
        cy.intercept('POST', '/login?returnurl=%2F', (req) => {
            // Log the request
            console.log('Intercepted POST request:', req);
        }).as('loginRequest');

        // Visit the login page
        cy.visit('https://demo.nopcommerce.com/login?returnUrl=%2F');

        // Fill in the login form and submit
        cy.fixture('example').then(
            data=>{
                cy.get('#Email').type(data.email)
                cy.get('#Password').type(data.password)
            }
        )
        cy.get('form > .buttons > .button-1').click();

        // Wait for the login request to be intercepted
        cy.wait('@loginRequest').then((interception) => {
            
            console.log('Intercepted response:', interception.response);
        });
        
    });
});
