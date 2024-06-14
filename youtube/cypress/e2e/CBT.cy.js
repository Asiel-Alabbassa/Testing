///<reference types = "cypress" />
context('template spec', () => {
    
    beforeEach( 'window' ,() => {
        cy.visit('https://scrolltest.com')
    })
    
    it('open in macbook-13', () => {
      cy.viewport('macbook-13')
      cy.screenshot()
      cy.wait(200)
    })

    it('open in macbook-15', () => {
        cy.viewport('macbook-15')
        cy.screenshot()
        cy.wait(200)
      })

      it('open in ipad-2', () => {
        cy.viewport('ipad-2')
        cy.screenshot()
        cy.wait(200)
      })

  })