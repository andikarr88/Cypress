describe('Petstore API Inventory Testing', () => {
    it('Create User - POST', () => {
        let body = {
            "id": "12345678",
            "username": Cypress.env('username'),
            "firstName": "andika12",
            "lastname": "12345",
            "email": "andikatest12@yyy.com",
            "password": Cypress.env('password'),
            "phone": "0838069787",
            "userstatus": 1
        }
        console.log(body)
        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(createUser =>{
            expect(createUser.status).to.equal(200);
        });
    });


    const userLogin = {
        method : 'GET',
        url : '/user/login',
        qs :{
            username: Cypress.env('username'),
            password: Cypress.env('password')
        }
    }
    it('Login Register', () => {
        cy.request('GET', '/user/login').as('userLogin');
        cy.get('@userLogin').then(userLogin =>{
            expect(userLogin.status).to.equal(200);
        })
    })
})