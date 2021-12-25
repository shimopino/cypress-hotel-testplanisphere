/// <reference types="cypress" />
/// <reference types="@testing-library/cypress" />
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps";

Given("ホームページを表示する", () => {
    cy.visit("https://hotel.testplanisphere.dev/ja")
})

When("「会員登録」ボタンをクリックする", () => {
    cy.findByRole('link', {name: "会員登録"}).click();
})

And("会員情報を入力して、「登録」ボタンをクリックする", () => {
    cy.findByLabelText(/メールアドレス/).type("shimopino@example.com")
    cy.findByRole('button', {name: /登録/}).click()
})

Then("会員登録できる", () => {
    cy.findByText("成功").should("be.visible")
})

