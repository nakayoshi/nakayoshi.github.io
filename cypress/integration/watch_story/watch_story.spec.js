/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="cypress" />

describe("ストーリーを見る", () => {
  before(() => {
    // サイトにアクセスにする
    cy.visit("/")
  })

  describe("ユーザーはメッセージごとに設定された遅延でメッセージを見ることができる", () => {
    before(() => {
      // サイトにアクセスにする
      cy.wait(30000)
    })
    // メタメッセージ
    // justify-content: center
    it("nakayoshi.danceがログインしました", () => {
      cy.get("ol>li")
        .eq(0)
        .should("have.css", "justify-content", "center")
        .contains("nakayoshi.danceがログインしました")
    })
    it("訪問者がログインしました", () => {
      cy.get("ol>li")
        .eq(1)
        .should("have.css", "justify-content", "center")
        .contains("訪問者がログインしました")
    })
    it("nakayoshi.danceへようこそ", () => {
      cy.get("ol>li")
        .eq(2)
        .should("have.css", "justify-content", "flex-start")
        .contains("nakayoshi.danceへようこそ")
    })
    it("え、だれ？", () => {
      cy.get("ol>li")
        .eq(3)
        .should("have.css", "justify-content", "flex-end")
        .contains("え、だれ？")
    })
    it("私たちは私たちのことを団体であるとは考えていません", () => {
      cy.get("ol>li")
        .eq(4)
        .should("have.css", "justify-content", "flex-start")
        .contains("私たちは私たちのことを団体であるとは考えていません")
    })
    it("あくまで個人間のネットワークなのです", () => {
      cy.get("ol>li")
        .eq(5)
        .should("have.css", "justify-content", "flex-start")
        .contains("あくまで個人間のネットワークなのです")
    })
    it("それを団体っていうんじゃないの？", () => {
      cy.get("ol>li")
        .eq(6)
        .should("have.css", "justify-content", "flex-end")
        .contains("それを団体っていうんじゃないの？")
    })
    it("うるさいばか", () => {
      cy.get("ol>li")
        .eq(7)
        .should("have.css", "justify-content", "flex-start")
        .contains("うるさいばか")
    })
    it("もし興味があればDiscordのリンクを差し上げますが？", () => {
      cy.get("ol>li")
        .eq(8)
        .should("have.css", "justify-content", "flex-start")
        .children("div")
        .contains("もし興味があればDiscordのリンクを差し上げますが？")
    })
    it("えぇ...？別にいらないかな。", () => {
      cy.get("ol>li")
        .eq(9)
        .should("have.css", "justify-content", "flex-end")
        .children("div")
        .contains("えぇ...？別にいらないかな。")
    })
    it("https://github.com/nakayoshi/", () => {
      cy.get("ol>li")
        .eq(10)
        .should("have.css", "justify-content", "flex-start")
        .children("div")
        .contains("https://github.com/nakayoshi/")
    })
    it("OGP: https://github.com/nakayoshi/", () => {
      // cy.get("ol>li").eq(11).should("have.css", "justify-content", "flex-start")
    })
    it("GitHubやんけ", () => {
      cy.get("ol>li")
        .eq(12)
        .should("have.css", "justify-content", "flex-end")
        .children("div")
        .contains("GitHubやんけ")
    })
    it("私たちについてもっと知りたいのなら\n/about\nまた話したい時には\n/contact\nにアクセスしてください。では。", () => {
      cy.get("ol>li").eq(13).should("have.css", "justify-content", "flex-start")
      for (const [index, text] of [
        "私たちについてもっと知りたいのなら",
        "/about",
        "また話したい時には",
        "/contact",
        "にアクセスしてください。では。",
      ].entries()) {
        cy.get("ol>li")
          .eq(13)
          .should("have.css", "justify-content", "flex-start")
          .children("div")
          .find("p")
          .eq(index)
          .contains(text)
      }
    })
    // cy.get("ol>li").eq(11).should("have.css", "justify-content", "flex-start")
    // cy.get("ol>li").eq(11).should("have.css", "justify-content", "flex-start")
    it("nakayoshi.danceがログアウトしました", () => {
      cy.get("ol>li")
        .eq(16)
        .should("have.css", "justify-content", "center")
        .children("div")
        .contains("nakayoshi.danceがログアウトしました")
    })
  })
})
