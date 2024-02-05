class home {
    elements = {
        logo: () => cy.get('.navbar-brand > img'),
        categoryLink: () => cy.get(`[href='#/category-type']`)
    }

    goToCategoryPage () {
        this.elements.categoryLink().click()
    }
}

export const homePage = new home();