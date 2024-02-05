//Command to create user
Cypress.Commands.add('createUser', () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;

    const email = `mautibo${randomNumber}@gmail.com`;
    const body = {
        email: email,
        password: 'test',
        roles: ['ROLE_ADMIN']
    };

    cy.request({
        method: 'POST',
        url: 'https://api.club-administration.qa.qubika.com/api/auth/register',
        body: body
    }).then((response) => {
        cy.wrap(response.body.email).as('user');
        cy.wrap(response.body.password).as('password');
    });
});