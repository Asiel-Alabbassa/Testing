
///<reference types = "cypress" />
before(function(){

    cy.fixture('example.json').as('test_data')
    
})

it('read file using fixture method', function(){
    cy.fixture('example.json').then((data) => {
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.body)
        
    })
    cy.log(this.test_data.name)
    //using its instead of using the name of the block of data in the json file
    cy.fixture('example.json').its('email').should('eq', 'hello@cypress.io')

})

it('read file function', function(){

    cy.readFile('./cypress/fixtures/example.json').then((dataVar) => {
    cy.log(dataVar.name)

    })
})

/////
it('write file demo', function(){

    cy.writeFile('sample.txt','Hello l am learning Cypress\n')
    cy.writeFile('sample.txt','Hello I am Asiel', { flag: 'a+' })

})