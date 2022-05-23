/// <reference types="cypress" />

describe("訪問する", () => {
  it("訪問者はサイトのタイトル「なかよし」を見ることができる", () => {
    cy.visit("/")
    cy.title().should("eq", "なかよし")
  })
})
