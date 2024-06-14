
describe('Register', () => {
    it('Launch the test application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.get('#loginPanel > :nth-child(3) > a').click()
      cy.get("input[id='customer.firstName']").type('asiel1')
      cy.get("input[id='customer.lastName']").type('albbassa1')
      cy.get("input[id='customer.address.street']").type('commissioners1')
      cy.get("input[id='customer.address.city']").type('london1')
      cy.get("input[id='customer.address.state']").type('ontario1')
      cy.get("input[id='customer.address.zipCode']").type('A9A-9A91')
      cy.get("input[id='customer.phoneNumber']").type('0010010011')
      cy.get("input[id='customer.ssn']").type('01991')
      cy.get("input[id='customer.username']").type('asieluser1')
      cy.get("input[id='customer.password']").type('pass1231')
      cy.get("input[id='repeatedPassword']").type('pass1231')
      cy.get("input[value='Register']").click()
      //customer.username.errors
      //the containes will pass the test because part of the text will pass too
      //cy.get("span[id='customer.username.errors']").contains(' username already exists')
      //should is from the chai assertion library and will fail because it takes the same value
      cy.get("span[id='customer.username.errors']").should('have.text','This username already exists.')
    })
  })

  