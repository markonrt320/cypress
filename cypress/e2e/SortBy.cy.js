describe('Login', ()=>{
    beforeEach(()=>{
        cy.viewport(1600,900)
    })

    it('Verify sort by price - High to Low', () => {
        cy.visit('/desktops')
        cy.get('#products-orderby').select('Price: High to Low')
        cy.wait(1000)
        cy.get('span.price.actual-price').then($prices=> {
            const prices = $prices.map((index, price) => parseFloat(price.innerText.replace('$', '').replace(',', ''))).get();

            cy.log(prices)
            // Check if prices are sorted in ascending order
            const sortedPrices = [...prices].sort((a, b) => b - a);
            expect(prices).to.deep.equal(sortedPrices);
        })
    })
    it('Verify sort by price - Low to High', () => {
        cy.visit('/notebooks')
        cy.get('#products-orderby').select('Price: Low to High')
        cy.wait(1000)
        cy.get('span.price.actual-price').then($prices=> {
            const prices = $prices.map((index, price) => parseFloat(price.innerText.replace('$', '').replace(',', ''))).get();

            cy.log(prices)
            // Check if prices are sorted in ascending order
            const sortedPrices = [...prices].sort((a, b) => a - b);
            expect(prices).to.deep.equal(sortedPrices);
        })
    })
    it('Verify sort by name - A to Z', () => {
        cy.visit('/shoes')
        cy.get('#products-orderby').select('Name: A to Z')
        cy.wait(1000)
        cy.get('.product-title a').then($titles=> {
            const titles = $titles.map((index, title) => title.innerText).get();
            
            const sortedTitles = [...titles].sort((a,b)=> a-b);
            
            expect(titles).to.deep.equal(sortedTitles);
        })
    })
    it('Verify sort by name - Z to A', () => {
        cy.visit('/cell-phones')
        cy.get('#products-orderby').select('Name: Z to A')
        cy.wait(1000)
        cy.get('.product-title a').then($titles=> {
            const titles = $titles.map((index, title) => title.innerText).get();

            cy.log(titles)
            // Check if prices are sorted in ascending order
            const sortedTitles = [...titles].sort((a,b)=> b-a);
            expect(titles).to.deep.equal(sortedTitles);
        })
    })
})