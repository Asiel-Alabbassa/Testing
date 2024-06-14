/// <reference types="Cypress" />

describe('Create Read Uodate Delete', () => {
  it('GET Request', () => {
   
    cy.request({
      method: 'GET',
      url : 'https://httpbin.org/get'
      // run the endpoint from here to see the response
        
    }).then(function(response1)
      {
        expect(response1.body).have.property('url')
      }
    )
  })

  it('POST Request', () => {
   
    cy.request({
      method: 'POST',
      url : 'https://httpbin.org/post',
      body : {
        name: 'asiel',
        age: 30
      },
      headers:{ 
        'content-type' : 'application/json'
      }
     }).then(function(response)
     {
       expect(response.body).have.property('json')
       expect(response.body.json).to.deep.equal(
        {
          "name":"asiel",
          "age":30
      })
    })
  })
  
  
  it('PUT Request', () => {
   
    cy.request({
      method: 'PUT',
      url : 'https://httpbin.org/put',
      body : { name: 'asiel'},
      headers:{ 'content-type' : 'application/json'}
     }).then(function(response)
     {
       expect(response.body).have.property('json')
       expect(response.body.json).to.deep.equal({"name":"asiel"})
    })
  })

  it('PATCH Request', () => {
   
    cy.request({
      method: 'PATCH',
      url : 'https://httpbin.org/patch',
      body : { name: 'asiel'},
      headers:{ 'content-type' : 'application/json'}
     }).then(function(response)
     {
       expect(response.body).have.property('json')
       expect(response.body.json).to.deep.equal({"name":"asiel1"})
    })
  })
})
