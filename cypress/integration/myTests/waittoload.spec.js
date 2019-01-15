describe(' Wait for element to load test', function() {
    it('Loads the internet automation training website, navigates to the loading functionality and checks for the text to appear', function() {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get(':nth-child(12) > a').click()
        cy.get('[href="/dynamic_loading/1"]').click()
        cy.get('button').click()
        cy.get('#finish > h4')
            .contains('Hello World!')
    })
})