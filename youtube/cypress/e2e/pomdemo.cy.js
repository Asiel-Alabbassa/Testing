
import { LoginPage } from "./pages/login_page"
const loginPage = new LoginPage()

beforeEach( function(){
    // run this before each it block inside and outside the describe block
    cy.visit('https://opensource-demo.orangehrmlive.com/')
})

describe('All login tests', () => {

    
    it('Login with valid credentials', function () {
        
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').click()
        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon').click()

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button')
    })

    it('Login with invalid username', function () {
        //cy.visit('https://opensource-demo.orangehrmlive.com/')
        loginPage.enterUsername('AdminX')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon').click()


    })

})

it('Login with invalid password', function () {
    //cy.visit('https://opensource-demo.orangehrmlive.com/')
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123X')
    loginPage.clickLogin()
    cy.get('.oxd-topbar-body-nav-slot > .oxd-icon-button > .oxd-icon').click()


})