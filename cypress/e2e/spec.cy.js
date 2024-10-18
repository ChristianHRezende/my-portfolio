import { HEADER_MENU_TEST_ID } from "../../src/constants";
describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://192.168.0.171:5173/my-portfolium/");
    cy.get(`[data-testid=${HEADER_MENU_TEST_ID}]`).children().eq(1).click();
    cy.contains("PRINCIPAIS PROJETOS").should("be.visible");
  });
});
