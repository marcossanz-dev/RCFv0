describe("Main functionalities", () => {
  let baseUrl = Cypress.config("baseUrl");

  it("Login success and navigate to dashboard page", () => {
    cy.visit(`${baseUrl}/login`);
    cy.get("[formControlName=username").type(Cypress.config("username"));
    cy.get("[formControlName=password").type(Cypress.config("password"));
    cy.get(".submit-button").click();
    cy.wait(3000);
    cy.url().then((url) =>
      assert.equal(url, `${baseUrl}/'check-imports-table'`)
    );
  });
});
