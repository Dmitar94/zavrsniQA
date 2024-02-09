describe("novi bord - vivifyscrum", () => {
    beforeEach(() => {
      cy.visit("https://cypress.vivifyscrum-stage.com/login");
      cy.get('input[name="email"]').type('dmitar123@gmail.com');
      cy.get('[type="password"]').type('12345678')
      cy.get('button[type="submit"]').contains('Log In').click();
      cy.url().should('contain', '/my-organizations');

      cy.get('li.vs-c-my-organization__board-new').click();
      cy.get('input[name="name"]').type('Dmimi');
      cy.get('button[name="next_btn"]').click();
      cy.get('span[name="type_scrum"]').click();
      cy.get('button[name="next_btn"]').click();
      cy.get('button[name="next_btn"]').click();
      cy.get('button[name="next_btn"]').click();
      cy.get('button[name="next_btn"]').click();

      cy.get('a[href="/boards/17584"]').click();
      cy.get('[title="More"]').should('contain','More').click();







     

});

it.only("Login pogresan email", () => {
  
});


})