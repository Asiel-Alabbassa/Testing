it('Assertions Demo ', () => {

    cy.visit('https://example.cypress.io')
    cy.contains('get').click() 
    cy.get('#query-btn')
                         .should('contain','Button')
                         .should('have.class', 'query-btn')
                         .should('have.id','query-btn')
                         .should('be.visible')
                         .should('be.enabled')
   /*
   // use 'and' to combine the assertion  will do the same 
   cy.get('#query-btn')
                        .should('contain','Button')
                        .and('have.class', 'query-btn')
                        .and('have.id','query-btn')
                        .and('be.visible')
                        .and('be.disabled')
    */

    // for explicit assertion expect
    expect(true).to.be.true

    //for explicit assertion assert 
    assert.equal(4 , 5 , 'NOT EQUAL')
  })