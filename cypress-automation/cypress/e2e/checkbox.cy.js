

describe('Handling checkbox', () => {
    it('Launch the test application', () => {
      cy.visit('https://www.zoho.com/au/books/accounting-software-demo/#/reports' , {headers: {"Accept-Encoding" : "gzip, deflate"}})
      cy.get(".btn.btn-link[data-test-title='configure-layout']").click()
      cy.get("div.nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div.nth-child(1) > div:nth-child(1) > div:nth-child(1)").check()
      
      

    })
  })

  