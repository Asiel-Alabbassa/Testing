

describe('Handling checkbox', () => {
    it('Launch the test application', () => {
      cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/reports' , {headers: {"Accept-Encoding" : "gzip, deflate"}})
      //check two radio button
      cy.get('[type="radio"]').check(['letter', 'landscape'])
      // check all the radio button
      cy.get('[type="radio"]').check()
      
      
      

    })
  })

  