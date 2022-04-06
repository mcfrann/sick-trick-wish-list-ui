/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays title Sick Trick Wish List', () => {
    cy.get('.title').should('be.visible')
  })

  it('displays form', () => {
    cy.get('.form').should('be.visible')
  })

  it('displays three tricks', () => {
    cy.get('.trick-list').should('be.visible')
  })

  it('lets you enter a new trick into the input fields and submit a new trick', () => {
    cy.get('#stance').select('regular', { force: true })
      .get('#name').type('flip', { force: true })
      .get('#obstacle').select('ledge', { force: true })
      .get('#tutorial').type('www.youtube.com', { force: true })
      .get('#submit').click()
  })

  it('displays new trick', () => {
    cy.get('.trick-list').should('be.visible')
      .get('#flip').should('be.visible')
      //this doesn't work
  })

})
