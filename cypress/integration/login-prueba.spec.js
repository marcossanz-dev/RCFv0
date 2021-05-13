describe("Login functionality", () => {
  let baseUrl = Cypress.config("baseUrl");

  it("Login success and navigate to home page", () => {
    cy.visit(`${baseUrl}/loginPrueba`);
    cy.get("[formControlName=username").type(Cypress.config("username"));
    cy.get("[formControlName=password").type(Cypress.config("password"));
    cy.get(".submit-button").click();
    cy.wait(3000);
    cy.url().then((url) => assert.equal(url, `${baseUrl}/home`));
  });
});