///<reference types = "cypress" />
describe('template spec', () => {
  it('Google Search', () => {
    //cy.visit('https://example.cypress.io')
    cy.visit('https://google.com')
    // set the time out locally this will have precedence over the default one in the config
    //cy.get('#APjFqb',{timeout : 5000}).type('Automation Step by Step{Enter}')
    cy.get('#APjFqb').type('Automation Step by Step{Enter}') 

    //we can set the timeout 
    cy.wait(5000)
    cy.contains('Videos')
    
  })
})