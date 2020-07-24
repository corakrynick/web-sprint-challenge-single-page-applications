describe ('Testing Pizza Form', () => {
    it('Renders Form', () => {
        cy.visit('http://localhost:3000/form')
    });
    it('Adds Text To Text Box', () => {
        cy.get('#name').type("Cora").should('have.value', "Cora")
    });
    it('Selects Multiple Toppings', () => {
        cy.get('#cheese').check().should('be.checked')
        cy.get('#pepperoni').check().should('be.checked')
        cy.get('#sausage').check().should('be.checked')
        cy.get('#pineapple').check().should('be.checked')
    });
    it('Submits Form', () => {
        cy.get('#name').type('Cooper')
        cy.contains('Place Order Now').click()
    });
})