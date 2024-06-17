/* eslint-disable no-undef */
beforeEach(() => {
  cy.visit('http://localhost:5173/');
});

describe('SANITY CHECK', () => {
  it('opens the app successfully', () => {
    cy.url().should("contain", 'http://localhost:5173/');
  });
});

describe('SUCCESS', () => {

  it('opens the login page', () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    //act
    cy.get("@loginLink").click();
    //assert
    cy.url().should("contain", "/login");
  });

  it('it starts with disabled submit button', () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    //act
    cy.get("@loginLink").click();
    //assert
    cy.get('[data-cy="submit-login-form"]').should("be.disabled");
  });

  it('submits form', () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    cy.get("@loginLink").click();
    //act
    cy.get('[data-cy="input-email"]').type("sevval@with.com");
    cy.get('[data-cy="input-password"]').type("1aB*S54xS");
    cy.get('[data-cy="input-terms"]').check();
    cy.get('[data-cy="submit-login-form"]').click();
    //assert
    cy.url().should("contain", "/welcome");
  });
})
describe('FAIL', () => {
  it('throws 3 error messages if email, password are not correct and terms is not checked', () => {
    //arrange
    cy.get('[data-cy="route-login"]').as("loginLink");
    cy.get("@loginLink").click();
    //act
    cy.get('[data-cy="input-email"]').type("sevval@with");
    cy.get('[data-cy="input-password"]').type("1aS");
    cy.get('[data-cy="input-terms"]').check();
    cy.get('[data-cy="input-terms"]').uncheck();
    //assert
    cy.get('[data-cy="errors"]').should("have.length", 3);
    cy.contains("Geçerli bir email adresi giriniz").should("be.visible");
  })
})