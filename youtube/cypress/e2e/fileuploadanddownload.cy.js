///<reference types = "cypress" />
/// <reference types="cypress-downloadfile"/>

it('upload file',function(){

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('example.json')
    cy.get('#myfile').attachFile('qajpg.jpg')

})


it('File download',function(){

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})