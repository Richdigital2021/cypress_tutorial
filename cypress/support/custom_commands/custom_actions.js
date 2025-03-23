let loginElements
let dashboard
let admingPage

before(() => {
  cy.fixture("elementLocators").then(data => {
    loginElements = data.login,
    dashboard = data.dashboard,
    admingPage = data.admingPage
  })
})

Cypress.Commands.add('typeTextCommand', (locator, text) => {
    cy.get(locator).type(text)
})

Cypress.Commands.add('clickElement', (locator) => {
    cy.get(locator).click()
})

Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')
    cy.typeTextCommand(loginElements.usernameField, username)
    cy.wait(2000)
    cy.typeTextCommand(loginElements.passwordField, password)
    cy.wait(2000)
    cy.clickElement(loginElements.loginButton)
})