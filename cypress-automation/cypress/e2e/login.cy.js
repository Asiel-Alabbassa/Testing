
describe('login', () => {
    it('Launch the test application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('#loginPanel > form > div:nth-child(2) > input').type('rcvtest')
      cy.get('#loginPanel > form > div:nth-child(4) > input').type('test1234')
      cy.get('#loginPanel > form > div:nth-child(5) > input').click()
      
    })
  })

  