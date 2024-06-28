import 'cypress-file-upload';
describe('Login', ()=>{
    beforeEach(()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.viewport(1600,900)
      })

it('Verify input functionality', () => {
    cy.get('#file-upload').attachFile('file1.pdf')
    cy.get('#file-submit').click()
    cy.wait(2000)
    cy.get('h3').should('contain.text', 'File Uploaded')
    cy.get('#uploaded-files').should('contain.text', 'file1.pdf')
    
})
it('Verify input functionality - drag n drop', () => {
    cy.get('#drag-drop-upload').attachFile('file1.pdf', { subjectType: 'drag-n-drop' })
    cy.get('#drag-drop-upload').should('contain.text', 'file1.pdf')
})
it('Change name of file - drag n drop', () => {
    cy.get('#drag-drop-upload').attachFile('file1.pdf', { subjectType: 'drag-n-drop' })
    cy.get('#drag-drop-upload').should('contain.text', 'file1.pdf')
})
})