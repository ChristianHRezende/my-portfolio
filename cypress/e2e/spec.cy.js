import { HEADER_MENU_TEST_ID } from "../../src/constants";
describe("template spec", () => {
  it("passes", () => {
    cy.visit(Cypress.env("host"));
    cy.get(`[data-testid=${HEADER_MENU_TEST_ID}]`).children().eq(1).click();
    cy.contains("PRINCIPAIS PROJETOS").should("be.visible");
  });
});
