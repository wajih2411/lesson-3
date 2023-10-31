describe('Cypress Test Suite - Lesson 3', () => {
it("Valid Login", () => {
  cy.visit('https://www.saucedemo.com/');
  cy.get('#user-name').type('standard_user');
  cy.get('#password').type('secret_sauce');
  cy.get('#login-button').click();
  cy.url().should("include", "/inventory.html");
});


it("Invalid Login - Incorrect Password", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("incorrect123");
  cy.get("#login-button").click();
  cy.get(".error-button").should("exist");
});


it("Invalid Login - Non-existent User", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("non_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.get(".error-button").should("exist");
});


it("Adding Items to the Cart", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click();
  cy.get(".shopping_cart_badge").should("have.text", "1");
});


it("Checkout Process", () => {
  cy.visit("https://www.saucedemo.com");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
  cy.get("#add-to-cart-sauce-labs-backpack").should('be.visible').click();
  cy.get(".shopping_cart_badge").should("have.text", "1");
  cy.get(".shopping_cart_link").click();
  cy.get("#checkout").click();
  cy.get("#first-name").type("John");
  cy.get("#last-name").type("Doe");
  cy.get("#postal-code").type("12345");
  cy.get("#continue").click();
  cy.get("#finish").click();
  cy.get(".complete-header").should("have.text", "Thank you for your order!");
});
});