describe("Login - vivifyscrum", () => {
    it.only("Pozitivan login", () => {
      cy.visit("https://cypress.vivifyscrum-stage.com/login");
      cy.get('input[name="email"]').type('dmitar123@gmail.com');
      cy.get('[type="password"]').type('12345678')
      cy.get('button[type="submit"]').contains('Log In').click();
      cy.url().should('contain', '/my-organizations');
});
    it.only("Login pogresan email", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login");
        cy.get('input[name="email"]').type('damir@gmail.com');
        cy.get('[type="password"]').type('12345678')
        cy.get('button[type="submit"]').contains('Log In').click();
        cy.url().should('not.contain', '/my-organizations');
});
    it.only("Login Pogresan password", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login");
        cy.get('input[name="email"]').type('dmitar123@gmail.com');
        cy.get('[type="password"]').type('12345678919')
        cy.get('button[type="submit"]').contains('Log In').click();
        cy.url().should('not.contain', '/my-organizations');
});
    it.only("Login bez emaila", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login");
        cy.get('input[name="email"]').type('');
        cy.get('[type="password"]').type('12345678')
        cy.get('button[type="submit"]').contains('Log In').click();
        cy.url().should('not.contain', '/my-organizations');
});
    it.only("Login bez passworda", () => {
        cy.visit("https://cypress.vivifyscrum-stage.com/login");
        cy.get('input[name="email"]').type('dmitar123@gmail.com');
        cy.get('[type="password"]').type('')
        cy.get('button[type="submit"]').contains('Log In').click();
        cy.url().should('not.contain', '/my-organizations');
});
    });