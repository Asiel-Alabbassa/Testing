
describe('Upload File Demo', () => {
    it('Launch the test application', () => {

      const filePath = 'qapic.jpg'
      cy.visit('https://the-internet.herokuapp.com/upload', {headers: {"Accept-Encoding" : "gzip, deflate"}})
     
      cy.get('#file-upload').selectFile('cypress/fixtures/qapic.jpg')
      cy.get('#file-submit').click()
      cy.get('#uploaded-files').contains('qapic.jpg')
      
      
    })
  })

  