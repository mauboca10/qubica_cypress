class login  {
    elements = {
        userBox: () => cy.get("[placeholder='Usuario o correo electrónico']"),
        passwordBox: () => cy.get("[placeholder='Contraseña']"),
        submitBtn: () => cy.get(`.btn`)
    }

    login (user, password) {
        this.elements.userBox().type(user)
        this.elements.passwordBox().type(password)
        this.elements.submitBtn().click()
    }
}

export const loginPage = new login()