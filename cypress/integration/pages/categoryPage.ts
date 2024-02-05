const randomNumber = Math.floor(Math.random() * 1000) + 1;
const name = 'futbol'+randomNumber
const nameSubCategory = 'ChildFutbol'+randomNumber
//cy.wrap(name).as('nameCategory')

class category {
    elements = {
        addCategoryBtn: () => cy.get (`.btn-primary`),
        categoryNameBox: () => cy.get('#input-username'),
        submitBtn: () => cy.get(`[type='submit']`),
        successfullyMessage: () => cy.get('.ng-trigger'),
        subCategoryLabel: () => cy.get('.text-muted'),
        subCategoryComboBox: () => cy.get(`[role='combobox']`),
        comboBoxOptionsCtn: () =>  cy.get(`.scroll-host`)
    }

    addNewCategory() {
        this.elements.addCategoryBtn().click()
        this.elements.categoryNameBox().type(name)
        this.elements.submitBtn().click()
    }

    addSubCategory() {
        this.elements.addCategoryBtn().click()
        this.elements.subCategoryLabel().click()
        this.elements.subCategoryComboBox().click()
        this.elements.comboBoxOptionsCtn().contains('Futbol').first().click()
        this.elements.categoryNameBox().type(nameSubCategory)
        this.elements.submitBtn().click()
    }

    verifySubCategory() {
        cy.wait(1000)
        cy.get('.pagination li').eq(-2).click()
        cy.contains(nameSubCategory).should('be.visible')
    }
}

export const categoryPage = new category()