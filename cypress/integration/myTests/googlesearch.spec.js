describe('My First Example Test', function() {
    it('loads google and performs a search', function(){
        cy.visit('https://www.google.com')
        cy.get('.gLFyf')
            .type('Something')
            .type('{enter}')
          })
})