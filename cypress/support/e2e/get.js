describe('Petstore API Inventory Testing', () => {
    it('get store inventory - GET', () => {
        cy.request('/store/inventory').as('get inventory');
        cy.get('@get inventory').then(inventory =>{
            expect(inventory.status).to.equal(200);
        })
    })
})