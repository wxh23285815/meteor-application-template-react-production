import { loginAsJohn } from '../login-helpers';

describe('List Stuff Page', () => {
  it('list john\'s Stuff', () => {
    loginAsJohn(cy)
    cy.contains('List Stuff').click()
    cy.url().should('include', 'list')
    cy.get('tbody tr')
        .first()
        .find('td')
        .first()
        .should('have.text', 'Baskets')
        .next()
        .should('have.text', '2')
        .next()
        .should('have.text', 'excellent')
        .next()
        .should('have.text', 'Edit')
  })
})
