it('Create User - POST', () => {
    let body = {
        "id": "12345678",
        "username": Cypress.env('username'),
        "firstName": "andika12",
        "lastname": "12345",
        "email": "andikatest12@yyy.com",
        "password": "test123456",
        "phone": "0838069787",
        "userstatus": 1
    }
    console.log(body)
    cy.request('POST', '/user', body).as('createUser');
    cy.get('@createUser').then(createUser =>{
        expect(createUser.status).to.equal(200);
    });
});