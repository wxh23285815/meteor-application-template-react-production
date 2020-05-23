export const loginAsJohn = (cy) => {
  cy.visit('/')
  cy.contains('Login').click()
  cy.contains('Sign In').click()
  cy.get('input[name="email"]').type('john@foo.com')
  cy.get('input[name="password"]').type('changeme')
  cy.get('button').click()
}

export const loginAsAdmin = (cy) => {
  cy.visit('/')
  cy.contains('Login').click()
  cy.contains('Sign In').click()
  cy.get('input[name="email"]').type('admin@foo.com')
  cy.get('input[name="password"]').type('changeme')
  cy.get('button').click()
}
