describe('Checkbox Tests', function() {
    it('Loads the internet automation training website, navigates to the checkbox functionality and checks a box', function() {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(5) > a').click()
        cy.get('#checkboxes > :nth-child(1)').check().should('be.checked')


    })
})