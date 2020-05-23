import { loginAsAdmin, loginAsJohn } from '../login-helpers';

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.contains('meteor-application-template')
    cy.contains('Login')
  })
  it('can login as john', () => {
    loginAsJohn(cy)
    cy.contains('Add Stuff')
    cy.contains('List Stuff')
    cy.contains('john@foo.com')
  })
  it('can login as admin', () => {
    loginAsAdmin(cy)
    cy.contains('Add Stuff')
    cy.contains('List Stuff')
    cy.contains('Admin')
    cy.contains('admin@foo.com')
  })
})
