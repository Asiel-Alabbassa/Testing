
describe('Handling Static Dropdown', () => {
    it('Launch the test application', () => {
      cy.visit('https://parabank.parasoft.com/parabank/admin.htm')
      //select from ad ropdown menu either using the index or value or text
      cy.get("select[id='loanProvider']").select('local')
      cy.get("select[id='loanProvider']").select('ws')
      cy.get("select[id='loanProvider']").select(0)
      //if the dropdown accept multiple seelction we should add the values in  []
      // cy.get("select[id='loanProvider']").select(['local', 'Web Service'])
    })
  })

  