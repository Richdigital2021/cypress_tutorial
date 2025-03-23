describe('Login Test for SauceDemo', () => {

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

  it('Test for successful login', () => {
    cy.login('standard_user','secret_sauce')
    cy.contains('Products')
  })

  it('Test for failed login: Test for locked out user', () => {
    cy.login('locked_out_user', "secret_sauce")
    cy.contains('Epic sadface: Sorry, this user has been locked out.').should('be.visible')
  })

  it('Test for: problem_user', () => {
    cy.login('problem_user', "secret_sauce")
  })

  it('Test for: problem_user', () => {
    cy.login('performance_glitch_user', "secret_sauce")
  })

  it('Test for: error_user', () => {
    cy.login('error_user', "secret_sauce")
  })

  it('Test for: visual_user', () => {
    cy.login('visual_user', "secret_sauce")
  })
})