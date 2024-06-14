

describe('Handling Dynamic Dropdown', () => {
    it('Launch the test application', () => {
      cy.visit('https://www.yatra.com' , {headers: {"Accept-Encoding" : "gzip, deflate"}})
      cy.get('#BE_flight_origin_city').click().clear().type("New", {delay : 200})

      cy.get('.viewport span:last-child').each(($el, index, $list) => {
        cy.log($el.text())
        // $el is a wrapped jQuery element
        if ($el.text() === 'JFK') {
          
          // wrap this element so we can
          // use cypress commands on it
          cy.wrap($el).click()
        } 
      })

    })
  })

  