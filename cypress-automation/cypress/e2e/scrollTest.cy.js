
describe('Scroll to view Demo', () => {
    it('Launch the test application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      //cy.scrollTo('bottom')
      //cy.scrollTo('top')
      //scroll to the bottom by 100 pixels on the Y axis 
      cy.scrollTo(0,100)
      //scroll to About Us in the footr
      //cy.get('#footerPanel > :nth-child(1) > :nth-child(2) > a').scrollIntoView()
      
    })
  })

  