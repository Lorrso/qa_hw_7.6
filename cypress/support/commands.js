// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, password) => {
    cy.contains('Log in').click()
    if (email) {
        cy.get('#mail').type(email)
    }
    if (password) {
        cy.get('#pass').type(password)
    }
    cy.contains('Submit').click()
})

Cypress.Commands.add('addBook', (title, description, author) => {
    cy.contains('Add new').click()
    if (title) {
        cy.get('#title').type(title)
    }
    if (description) {
        cy.get('#description').type(description)
    }
    if (author) {
        cy.get('#authors').type(author)
    }
    cy.get('#favorite').click()
    cy.contains('Submit').click()
})

Cypress.Commands.add('visibilityValidation', (title, description, author) => {
    cy.contains(title).should('be.visible')
    cy.contains(description).should('be.visible')
    cy.contains(author).should('be.visible')
    cy.contains('Dowload book').should('be.visible')
})