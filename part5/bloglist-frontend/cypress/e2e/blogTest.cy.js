import { assert } from "vitest";

describe('Blog App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('Login Form', () => {
    cy.get("#form-login")

    console.log("formLogin")
  });
  

})