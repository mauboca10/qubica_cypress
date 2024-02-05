import { loginPage } from '../integration/pages/loginPage'
import { homePage } from '../integration/pages/homePage'
import { categoryPage } from '../integration/pages/categoryPage'


describe('', () => {
    before('', () => {
        cy.createUser();
    })
    it('', () => {
        //Visit Login Page
        cy.visit(Cypress.env().baseUrl, { failOnStatusCode: false })
        //Verify that the URL is correct
        cy.url().should('eq', 'https://club-administration.qa.qubika.com/#/auth/login');
        //Verify that the User and Password boxes are displayed correctly
        loginPage.elements.userBox().should('be.visible')
        loginPage.elements.passwordBox().should('be.visible')
        //Login with the created user
        cy.get('@user').then((user) => {
            loginPage.login(user.toString(), 'test')
        })
        //Validate that the user is loged in.
        homePage.elements.logo().should('be.visible')
        //Go to Category Page
        homePage.goToCategoryPage()
        //Add new category
        categoryPage.addNewCategory()
        //Verify that the category was created successfully
        categoryPage.elements.successfullyMessage().should('be.visible')
        //Create sub category
        categoryPage.addSubCategory()
        //Validate that the subcategory is displayed in the Categories list.
        categoryPage.verifySubCategory()
    })
})